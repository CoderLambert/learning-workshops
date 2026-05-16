// 学习进度本地存储管理
const storageManager = {
  PREFIX: "workshop_",

  getProgress() {
    try {
      const data = localStorage.getItem(this.PREFIX + "progress");
      return data ? JSON.parse(data) : {};
    } catch { return {}; }
  },

  saveProgress(progress) {
    try {
      localStorage.setItem(this.PREFIX + "progress", JSON.stringify(progress));
    } catch (e) { console.warn("存储失败:", e); }
  },

  markLearned(id) {
    const progress = this.getProgress();
    progress[id] = { learned: true, timestamp: Date.now() };
    this.saveProgress(progress);
  },

  getFavorites() {
    try {
      const data = localStorage.getItem(this.PREFIX + "favorites");
      return data ? JSON.parse(data) : [];
    } catch { return []; }
  },

  toggleFavorite(id) {
    const favs = this.getFavorites();
    const idx = favs.indexOf(id);
    if (idx > -1) favs.splice(idx, 1);
    else favs.push(id);
    try {
      localStorage.setItem(this.PREFIX + "favorites", JSON.stringify(favs));
    } catch (e) { console.warn("收藏存储失败:", e); }
    return favs;
  },

  isFavorite(id) {
    return this.getFavorites().includes(id);
  },

  getStats() {
    const progress = this.getProgress();
    const total = (typeof wordData !== 'undefined' && wordData.words) ? wordData.words.length :
                  (typeof WordRoots !== 'undefined') ? WordRoots.length : 0;
    const learned = Object.keys(progress).length;
    const percentage = total > 0 ? Math.round((learned / total) * 100) : 0;
    return { total, learned, percentage };
  }
};
window.storageManager = storageManager;

// 兼容旧版 Storage API
const Storage = {
  init() {},
  markLearned(id) { storageManager.markLearned(id); },
  markMastered(id) { storageManager.markLearned(id); },
  getProgress() { return storageManager.getProgress(); },
  getStats() { const s = storageManager.getStats(); return {...s, mastered: s.learned}; },
  isMastered(id) { return !!storageManager.getProgress()[id]?.learned; },
  isLearned(id) { return !!storageManager.getProgress()[id]?.learned; },
  getLastVisited() { return parseInt(localStorage.getItem('ts_workshop_last_visited') || '0'); },
  saveLastVisited(id) { localStorage.setItem('ts_workshop_last_visited', String(id)); },
  getMastered() { return Object.keys(storageManager.getProgress()).filter(id => storageManager.getProgress()[id]?.learned); },
  reset() { localStorage.clear(); }
};
window.Storage = Storage;
