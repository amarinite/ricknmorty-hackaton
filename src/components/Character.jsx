export default function Character({ char }) {
  console.log("hey");
  return (
    <article className="flex overflow-hidden rounded-lg bg-gray-900 text-white shadow-lg ">
      <img
        className="max-w-[35%]"
        src={char.image}
        alt={char.name + " portrait"}
      />
      <div className="ml-7">
        <p className="text-2xl font-semibold">{char.name}</p>
        <p>
          {char.status === "Alive"
            ? "🟢 Alive"
            : char.status === "Dead"
            ? "💀 Dead"
            : "❓ Unknown"}
        </p>
        <p>Origin: {char.origin.name}</p>
        <p>Current location: {char.location.name}</p>
        <p>Number of episodes: {char.episode.length}</p>
      </div>
    </article>
  );
}
