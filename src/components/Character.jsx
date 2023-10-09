export function Character({ char }) {
  console.log("hey");
  return (
    <div>
      <p>{char.name}</p>
      <p>Number of episodes: {char.episode.length}</p>
      <p>
        {char.status === "Alive" ? "🟢" : char.status === "Dead" ? "💀" : "❓"}
      </p>
    </div>
  );
}
