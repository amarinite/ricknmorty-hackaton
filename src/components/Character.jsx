export default function Character({ char }) {
  console.log("hey");
  return (
    <article className="flex overflow-hidden rounded-lg border-2 border-gray-600 ">
      <img
        className="max-w-[35%]"
        src={char.image}
        alt={char.name + " portrait"}
      />
      <div>
        <p>{char.name}</p>
        <p>Number of episodes: {char.episode.length}</p>
        <p>
          {char.status === "Alive"
            ? "🟢"
            : char.status === "Dead"
            ? "💀"
            : "❓"}
        </p>
      </div>
    </article>
  );
}
