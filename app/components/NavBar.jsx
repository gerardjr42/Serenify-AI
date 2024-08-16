import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-6 bg-gray-950 bg-opacity-60 flex justify-between items-center w-[90%] mx-auto">
      <Link href="/" className="text-white text-3xl font-bold font-serif ml-2">
        Serenify
      </Link>
      <ul className="flex items-center">
        <li className="mr-4 ">
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/chat" className="text-white hover:text-gray-200">
            Chat
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/login" className="text-white hover:text-gray-200">
            <button className="text-white  hover:bg-white hover:text-black px-2 py-1 rounded-md">
              Login/Logout
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
