export const storeStorage= async (key, value) => {
  try {
    localStorage.setItem(`@${key}`, value)
  } catch (e) {
    return e
  }
}

export const getStorage = async (key) => {
  try {
    const value = localStorage.getItem(`@${key}`)
    if (value) {
      return value
    }
  } catch (e) {
    return e
  }
}
