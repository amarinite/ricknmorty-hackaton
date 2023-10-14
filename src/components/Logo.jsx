export default function Logo() {
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
