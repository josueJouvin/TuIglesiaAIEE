import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="flex h-full">
      <div className="flex-3">
        <div className="pr-28 flex flex-col justify-center gap-12 h-full">
          <h1 className="text-6xl font-bold leading-tight">Encuentra Tu Iglesia AIEE En Todo El Pais</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            perspiciatis eum alias voluptas illum optio totam quae, vitae
            doloribus! Tempora asperiores error cum perferendis sit.
          </p>
          <SearchBar/>
          
        </div>
      </div>
      <div className="flex-2 bg-blue-200 relative flex items-center">
        <img
          src="/bg-home.png"
          alt=""
          className="min-w-[115%] absolute right-0"
        />
      </div>
    </div>
  );
};

export default Home;
