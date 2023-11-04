import { useEffect, useState } from "react";

const CHARACTERS_ENDPOINT_ALL = "https://rickandmortyapi.com/api/character";

export function useCharacters(page) {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch(
      page
        ? `${CHARACTERS_ENDPOINT_ALL}/?page=${page}`
        : CHARACTERS_ENDPOINT_ALL,
    )
      .then((res) => res.json())
      .then((data) => setChars((oldArray) => [...oldArray, ...data.results]));
  }, [page]);

  return chars;
}
