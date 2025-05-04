import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  removeFav: () => {},
  addFav: () => {},
});

function FavoriteContextProvider({ children }) {
  const [favsIds, setFavsIds] = useState([]);
  function addFav(id) {
    setFavsIds((currentFavIds) => {
      return [...currentFavIds, id];
    });
  }

  function removeFav(id) {
    const filteredData = favsIds.filter((item) => item != id);
    setFavsIds([...filteredData]);
  }

  const value = {
    ids: favsIds,
    removeFav: removeFav,
    addFav: addFav,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
