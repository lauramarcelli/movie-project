export default function useLocalStorage() {
    const get = (info) => {
        return JSON.parse(localStorage.getItem(`${info}`));
    };

    const set = (info, movies) => {
        localStorage.setItem(`${info}`, JSON.stringify(movies));
    };

    const data = {
        get,
        set,
    };

    return data;
}