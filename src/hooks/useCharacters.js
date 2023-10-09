import { useEffect, useState } from "react";

const CHARACTERS_ENDPOINT_ALL = "https://rickandmortyapi.com/api/character";

export function useCharacters() {
  const [chars, setChars] = useState();

  useEffect(() => {
    fetch(CHARACTERS_ENDPOINT_ALL)
      .then((res) => res.json())
      .then((data) => setChars(data.results));
  }, []);

  return chars;
}
