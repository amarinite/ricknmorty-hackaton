import { Character } from "./components/Character";
import { useCharacters } from "./hooks/useCharacters";

export function App() {
  const chars = useCharacters();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Rikimortis</h1>
      {chars && chars.map((char) => <Character char={char} key={char.id} />)}
    </>
  );
}
