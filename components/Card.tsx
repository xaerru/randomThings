import Link from "next/link";

interface CardProps {
  text: string;
  href: string;
}

export const Card = ({ text, href }: CardProps): JSX.Element => {
  return (
    <>
      <Link href="href">
        <div className="card bg-green-300 flex flex-col justify-between w-72 sm:w-96 h-72 sm:h-96 text-gray-800 shadow-lg rounded-lg">
          <div className="flex items-center justify-center h-screen">
            <div className="text-center text-7xl font-mono font-semibold">
              {text}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
