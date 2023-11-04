export default function Logo() {
  return (
    <div className="flex max-w-[90%] flex-col items-center justify-center gap-6 py-6 text-center md:flex-row">
      <h1 className="order-last text-5xl font-black text-gray-900 md:order-first md:text-6xl">
        Rikimorti Characters
      </h1>
      <img
        className="max-w-[5rem] md:max-w-[14rem]"
        src="./rikimorti.png"
        alt="Silhouette in black and white of Rick and Morty"
      />
    </div>
  );
}
