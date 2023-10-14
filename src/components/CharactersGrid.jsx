import Character from "./Character";
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersGrid() {
  const chars = useCharacters();

  return (
    <section className="wrapper grid grid-cols-2 justify-center gap-6 py-12">
      {chars && chars.map((char) => <Character char={char} key={char.id} />)}
    </section>
  );
}
