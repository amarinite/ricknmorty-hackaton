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
  const [page, setPage] = useState(1);

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

  const noResults = filteredChars.length === 0 && query;

  return (
    <>
      <Logo />
      <main className="min-h-[80vh] bg-gray-800 text-gray-700">
        <CharacterSearcher query={query} onQuery={setQuery} />
        {noResults ? (
          <p className="mt-8 text-center text-white">No results found</p>
        ) : (
          <CharactersGrid chars={query ? filteredChars : chars} />
        )}
        <div className="flex justify-center pb-8">
          {!noResults && (
            <button className="rounded-lg bg-gray-300 px-4 py-3 text-lg font-semibold text-gray-800 shadow-md hover:bg-gray-200">
              Load more
            </button>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
