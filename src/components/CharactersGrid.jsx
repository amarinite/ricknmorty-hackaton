import Character from "./Character";
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersGrid() {
  const chars = useCharacters();

  return (
    <section className="wrapper grid-cols-2 gap-6">
      {chars && chars.map((char) => <Character char={char} key={char.id} />)}
    </section>
  );
}
