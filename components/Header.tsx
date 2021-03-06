export const Header = ({ text }): JSX.Element => {
  return (
    <>
      <div className="bg-green-300 flex items-center justify-center h-screen">
        <div className="text-center text-7xl md:text-1xl font-mono font-semibold">
          {text}
        </div>
      </div>
    </>
  );
};
