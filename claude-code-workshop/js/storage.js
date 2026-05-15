// 存储工具类，处理学习进度的本地存储
const Storage = {
  // 存储键名
  KEYS: {
    PROGRESS: 'tailwindcss4_workshop_progress',
    MASTERED: 'tailwindcss4_workshop_mastered',
    LAST_VISITED: 'tailwindcss4_workshop_last_visited'
  },

  // 初始化存储
  init() {
    try {
      // 如果不存在进度数据，初始化
      if (!localStorage.getItem(this.KEYS.PROGRESS)) {
        localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify({}));
      }
      if (!localStorage.getItem(this.KEYS.MASTERED)) {
        localStorage.setItem(this.KEYS.MASTERED, JSON.stringify([]));
      }
    } catch (e) {
      console.error('存储初始化失败:', e);
    }
  },

  // 标记知识点为已学习
  markLearned(id) {
    try {
      const progress = JSON.parse(localStorage.getItem(this.KEYS.PROGRESS) || '{}');
      progress[id] = {
        learnedAt: Date.now(),
        completed: true
      };
      localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(progress));
      return true;
    } catch (e) {
      console.error('标记学习进度失败:', e);
      return false;
    }
  },

  // 标记知识点为已掌握
  markMastered(id) {
    try {
      const mastered = JSON.parse(localStorage.getItem(this.KEYS.MASTERED) || '[]');
      if (!mastered.includes(id)) {
        mastered.push(id);
        localStorage.setItem(this.KEYS.MASTERED, JSON.stringify(mastered));
      }
      return true;
    } catch (e) {
      console.error('标记已掌握失败:', e);
      return false;
    }
  },

  // 获取学习进度
  getProgress() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.PROGRESS) || '{}');
    } catch (e) {
      console.error('获取学习进度失败:', e);
      return {};
    }
  },

  // 获取已掌握的知识点
  getMastered() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.MASTERED) || '[]');
    } catch (e) {
      console.error('获取已掌握知识点失败:', e);
      return [];
    }
  },

  // 检查是否已学习
  isLearned(id) {
    const progress = this.getProgress();
    return !!progress[id]?.completed;
  },

  // 检查是否已掌握
  isMastered(id) {
    const mastered = this.getMastered();
    return mastered.includes(id);
  },

  // 获取学习统计
  getStats() {
    try {
      const progress = this.getProgress();
      const mastered = this.getMastered();
      const total = WordRoots.length;
      const learnedCount = Object.values(progress).filter(item => item.completed).length;
      const masteredCount = mastered.length;
      
      return {
        total,
        learned: learnedCount,
        mastered: masteredCount,
        progress: total > 0 ? Math.round((learnedCount / total) * 100) : 0
      };
    } catch (e) {
      console.error('获取统计信息失败:', e);
      return {
        total: 0,
        learned: 0,
        mastered: 0,
        progress: 0
      };
    }
  },

  // 保存最后访问的知识点
  saveLastVisited(id) {
    try {
      localStorage.setItem(this.KEYS.LAST_VISITED, String(id));
      return true;
    } catch (e) {
      console.error('保存最后访问失败:', e);
      return false;
    }
  },

  // 获取最后访问的知识点
  getLastVisited() {
    try {
      const id = localStorage.getItem(this.KEYS.LAST_VISITED);
      return id ? parseInt(id, 10) : null;
    } catch (e) {
      console.error('获取最后访问失败:', e);
      return null;
    }
  },

  // 重置所有进度
  reset() {
    try {
      localStorage.removeItem(this.KEYS.PROGRESS);
      localStorage.removeItem(this.KEYS.MASTERED);
      localStorage.removeItem(this.KEYS.LAST_VISITED);
      this.init();
      return true;
    } catch (e) {
      console.error('重置进度失败:', e);
      return false;
    }
  }
};

// 初始化存储
Storage.init();
window.Storage = Storage;
