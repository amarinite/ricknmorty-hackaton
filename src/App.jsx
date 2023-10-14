import CharacterSearcher from "./components/CharacterSearcher";
import CharactersGrid from "./components/CharactersGrid";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

import { useEffect, useState } from "react";
import { useCharacters } from "./hooks/useCharacters";

const CHARACTERS_ENDPOINT_ALL = "https://rickandmortyapi.com/api/character";

export function App() {
  const [query, setQuery] = useState("");
  const [chars, setChars] = useState([]);

  let filteredChars = [];

  useEffect(() => {
    fetch(CHARACTERS_ENDPOINT_ALL)
      .then((res) => res.json())
      .then((data) => setChars(data.results));
  }, []);

  if (chars && query) {
    filteredChars = chars.filter((char) =>
      char.name.toLowerCase().includes(query.toLowerCase()),
    );
    console.log(filteredChars);
  }

  return (
    <>
      <Logo />
      <main className="min-h-[80vh] bg-gray-800 text-gray-700">
        <CharacterSearcher query={query} onQuery={setQuery} />
        {filteredChars.length === 0 && query ? (
          <p className="mt-8 text-center text-white">No results found</p>
        ) : (
          <CharactersGrid chars={query ? filteredChars : chars} />
        )}
        <div className="flex justify-center pb-8">
          <button className="rounded-lg bg-gray-300 px-4 py-3 text-lg font-semibold text-gray-800 shadow-md hover:bg-gray-200">
            Load more
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
