export default function Character({ char }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-gray-900 text-white shadow-lg sm:flex-row ">
      <img
        className="sm:max-w-[35%]"
        src={char.image}
        alt={char.name + " portrait"}
      />
      <div className="my-4 ml-5 mr-2 md:my-2 md:ml-3 lg:ml-7">
        <p className="text-2xl font-semibold md:text-base lg:text-2xl">
          {char.name}
        </p>
        <p className="text-sm md:text-[0.6rem] lg:text-sm">
          {char.status === "Alive"
            ? "🟢 Alive"
            : char.status === "Dead"
            ? "💀 Dead"
            : "❓ Unknown"}
        </p>
        <p className="text-lg md:text-[0.7rem] lg:text-sm xl:text-base">
          Origin: {char.origin.name}
        </p>
        <p className="md:text-[0.7rem] lg:text-sm xl:text-base">
          Current location: {char.location.name}
        </p>
        <p className="md:text-[0.7rem] lg:text-sm xl:text-base">
          Number of episodes: {char.episode.length}
        </p>
      </div>
    </article>
  );
}
