import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="my-12 flex w-full flex-col items-center text-center">
      <div className="max-w-sm text-gray-500">
        <p>
          This page was created for Jump2Digital's 2023 hackaton. Check the
          source code here:
        </p>
        <a
          href="https://github.com/amarinite"
          className="flex justify-center text-2xl"
        >
          <FaGithub />
        </a>
        <p>Developed by Alba Mar</p>
      </div>
    </footer>
  );
}
