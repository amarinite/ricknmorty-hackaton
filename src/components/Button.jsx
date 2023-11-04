export default function LoadButton({ onLoad }) {
  function handleClick() {
    onLoad();
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-gray-300 px-4 py-3 text-lg font-semibold text-gray-800 shadow-md hover:bg-gray-200"
    >
      Load more
    </button>
  );
}
