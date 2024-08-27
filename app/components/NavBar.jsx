import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-6 bg-gray-950 bg-opacity-60 flex justify-between items-center w-[90%] mx-auto">
      <Link href="/" className="text-white text-3xl font-bold font-serif ml-2">
        Serenify
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/chat" className="text-white hover:text-gray-200">
          Chat
        </Link>
        <SignedOut>
          <SignInButton
            mode="modal"
            className="text-white hover:bg-white hover:text-black px-2 py-1 rounded-md"
          >
            Sign In
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutRedirectUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
