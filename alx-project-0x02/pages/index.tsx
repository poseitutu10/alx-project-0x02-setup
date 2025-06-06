import Link from "next/link";

const Main: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-white">
        <h2 className="text-5xl">Welcome to this page</h2>
        <div className="button flex justify-center gap-5 my-10">
          <Link href={`/home`}>
            {" "}
            <button className="bg-white text-gray-900 text-xs font-semibold px-5 py-2">
              Home
            </button>
          </Link>
          <Link href={`/about`}>
            <button className="bg-white text-gray-900 text-xs font-semibold px-5 py-2">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
