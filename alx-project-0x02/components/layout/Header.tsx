import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-20 flex justify-between">
      <h2>
        <Link href={`/`}>Phinehas</Link>
      </h2>
      <nav>
        <ul className="space-x-5">
          <Link href={`/home`}>Home</Link>
          <Link href={`/about`}>About</Link>
          <Link href={`/posts`}>Posts</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;