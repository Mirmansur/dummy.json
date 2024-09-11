export const saveToLocalStorage = (key, data) => {
  if (typeof data === "object" && data !== null) {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.setItem(key, data);
  }
};
