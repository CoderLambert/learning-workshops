// Vue 3 学习工坊 - 本地存储管理
const storageManager = {
  PREFIX: "vue3_workshop_",

  getProgress() {
    try {
      const data = localStorage.getItem(this.PREFIX + "progress")
      return data ? JSON.parse(data) : {}
    } catch {
      return {}
    }
  },

  saveProgress(progress) {
    try {
      localStorage.setItem(this.PREFIX + "progress", JSON.stringify(progress))
    } catch (e) {
      console.warn("存储失败:", e)
    }
  },

  markLearned(id) {
    const progress = this.getProgress()
    progress[id] = { learned: true, timestamp: Date.now() }
    this.saveProgress(progress)
  },

  getFavorites() {
    try {
      const data = localStorage.getItem(this.PREFIX + "favorites")
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  toggleFavorite(id) {
    const favs = this.getFavorites()
    const idx = favs.indexOf(id)
    if (idx > -1) {
      favs.splice(idx, 1)
    } else {
      favs.push(id)
    }
    try {
      localStorage.setItem(this.PREFIX + "favorites", JSON.stringify(favs))
    } catch (e) {
      console.warn("收藏存储失败:", e)
    }
    return favs
  },

  isFavorite(id) {
    return this.getFavorites().includes(id)
  },

  getStats() {
    const progress = this.getProgress()
    const total = wordData.words.length
    const learned = Object.keys(progress).length
    const percentage = total > 0 ? Math.round((learned / total) * 100) : 0
    return { total, learned, percentage }
  }
}
