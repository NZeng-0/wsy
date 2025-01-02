export function useLocalCache() {
  // 1.获取cache
  function getCache(key) {
    return localStorage.getItem(key)
  }

  // 2.设置cache
  function setCache(key, value) {
    localStorage.setItem(key, value)
  }

  // 3.移除cache
  function removeCache(key) {
    localStorage.removeItem(key)
  }

  // 4.清除所有cache
  function clearCache() {
    localStorage.clear()
  }

  return {getCache, setCache, removeCache, clearCache}
}
