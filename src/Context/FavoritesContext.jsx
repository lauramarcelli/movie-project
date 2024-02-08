import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";;

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const { get, set } = useLocalStorage();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        console.log("entre al use effect")
        get("favs") ? setFavorites(get("favs")) : setFavorites([]);
    }, []);

    const addFavs = (e, movie) => {
        console.log(favorites)
        e.stopPropagation();
        setFavorites([...favorites, movie]);
        console.log(favorites)
        set("favs", [...favorites, movie]);
    };

    const delFavs = (e, id) => {
        console.log("chau")
        e.stopPropagation();
        setFavorites(favorites.filter((movie) => movie.id !== id));
        set(
            "favs",
            favorites.filter((movie) => movie.id !== id)
        );
    };

    const isFavs = (id) => {
        console.log('es favorito')
        console.log(favorites.some((id) => movie.id === id))
        return favorites.some((id) => movie.id === id);
    };

    const data = {
        favorites,
        addFavs,
        delFavs,
        isFavs,
    };

    return (
        <FavoritesContext.Provider value={data}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;