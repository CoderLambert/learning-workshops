// ===== Storage Manager - Progress Persistence =====
const StorageManager = (function() {
  const STORAGE_KEY = 'nextjs_workshop_progress';

  function _getDefaultProgress() {
    return {
      masteredRoots: [],
      currentRootIndex: 0,
      lastStudyDate: null
    };
  }

  function _validateProgress(data) {
    return (
      data &&
      typeof data === 'object' &&
      Array.isArray(data.masteredRoots) &&
      typeof data.currentRootIndex === 'number'
    );
  }

  function getProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return _getDefaultProgress();
      const parsed = JSON.parse(data);
      if (!_validateProgress(parsed)) {
        console.warn('Invalid progress data, using default');
        return _getDefaultProgress();
      }
      return parsed;
    } catch (error) {
      console.error('Failed to load progress:', error);
      return _getDefaultProgress();
    }
  }

  function _saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return true;
    } catch (error) {
      console.error('Failed to save progress:', error);
      return false;
    }
  }

  return {
    getProgress,
    markRootAsMastered(rootId) {
      const progress = getProgress();
      if (!progress.masteredRoots.includes(rootId)) {
        progress.masteredRoots.push(rootId);
        progress.lastStudyDate = new Date().toISOString();
        _saveProgress(progress);
      }
      return progress;
    },
    unmarkRoot(rootId) {
      const progress = getProgress();
      progress.masteredRoots = progress.masteredRoots.filter(id => id !== rootId);
      _saveProgress(progress);
      return progress;
    },
    updateProgress(rootIndex) {
      const progress = getProgress();
      progress.currentRootIndex = rootIndex;
      progress.lastStudyDate = new Date().toISOString();
      _saveProgress(progress);
      return progress;
    },
    isMastered(rootId) {
      return getProgress().masteredRoots.includes(rootId);
    },
    getMasteredCount() {
      return getProgress().masteredRoots.length;
    },
    resetProgress() {
      try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
      } catch (error) {
        console.error('Failed to reset progress:', error);
        return false;
      }
    }
  };
})();
