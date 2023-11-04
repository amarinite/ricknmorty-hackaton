import CharacterSearcher from "./components/CharacterSearcher";
import CharactersGrid from "./components/CharactersGrid";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

import { useState } from "react";
import { useCharacters } from "./hooks/useCharacters";
import LoadButton from "./components/Button";

export function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  let filteredChars = [];
  const chars = useCharacters(page);

  if (chars && query) {
    filteredChars = chars.filter((char) =>
      char.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  const noResults = filteredChars.length === 0 && query;

  function loadMore() {
    setPage((page) => page + 1);
  }

  return (
    <>
      <header className="flex flex-col items-center bg-gray-100">
        <Logo />
      </header>
      <main className="min-h-[80vh] bg-gray-800 text-gray-700">
        <CharacterSearcher query={query} onQuery={setQuery} />
        {noResults ? (
          <p className="mt-8 text-center text-white">No results found</p>
        ) : (
          <CharactersGrid chars={query ? filteredChars : chars} />
        )}
        <div className="flex justify-center pb-8">
          {!noResults && <LoadButton onLoad={loadMore} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
