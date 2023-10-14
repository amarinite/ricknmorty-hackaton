import CharactersGrid from "./components/CharactersGrid";

function Logo() {
  return (
    <header className="flex items-center justify-center gap-6 bg-gray-100 py-6">
      <h1 className="text-6xl font-black text-gray-900">
        Rikimorti Characters
      </h1>
      <img
        className="max-w-[14rem]"
        src="./rikimorti.png"
        alt="Silhouette in black and white of Rick and Morty"
      />
    </header>
  );
}

function CharacterSearcher() {
  return (
    <section className="flex justify-center bg-gray-100 pb-10">
      <form className="flex gap-4">
        <input
          className="w-[32rem] rounded-lg border border-gray-300 px-4"
          name="searcher"
        />
        <button className="rounded-lg bg-gray-700 p-2 text-white shadow-sm">
          Find your character
        </button>
      </form>
    </section>
  );
}

export function App() {
  return (
    <>
      <Logo />
      <main className="bg-gray-800 text-gray-700">
        <CharacterSearcher />
        <CharactersGrid />
      </main>
      <footer className="my-12 flex w-full flex-col items-center text-center">
        <div className="max-w-md text-gray-500">
          <p>
            This project was created for Jump2Digital's 2023 hackaton. Check the
            source code here:
          </p>
          <p>GH</p>
          <p>Developed by Alba Mar</p>
        </div>
      </footer>
    </>
  );
}
