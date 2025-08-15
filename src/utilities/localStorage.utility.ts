export const setLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string);
}