import { FaSearch } from "react-icons/fa";

export default function CharacterSearcher({ query, onQuery }) {
  function handleChange(e) {
    onQuery(e.target.value.trim());
  }

  return (
    <section className="flex justify-center bg-gray-100 pb-10">
      <form className="flex gap-4">
        <div className="flex w-[24rem] items-center gap-2 rounded-lg border-2 border-gray-300 px-4 py-2 focus-within:border-blue-700  md:w-[32rem]">
          <FaSearch />
          <input
            value={query}
            onChange={handleChange}
            type="search"
            className="w-full border-none bg-transparent focus:outline-none"
            name="searcher"
            placeholder="Find your character..."
          />
        </div>
      </form>
    </section>
  );
}
