import config from './../config'

export default {
  setItem(key, val) {
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(config.nameSpace, JSON.stringify(storage))
  },
  getItem(key) {
    return this.getStorage()[key]
  },
  removeItem(key) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.nameSpace, JSON.stringify(storage))
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.nameSpace) || '{}')
  },
  clearAll() {
    window.localStorage.clear()
  },
}
