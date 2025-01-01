export function getLoc(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLoc(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
}

export function removeLoc(key) {
    return localStorage.removeItem(key)
}