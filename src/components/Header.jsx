import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 py-3 border-2 border-gray-500 flex justify-between items-center flex-wrap">
      <Link href="/" className="text-lg font-semibold">
        ☆ Dev-Story
      </Link>
      <nav className="flex gap-5">
        <Link href="/about">About</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
