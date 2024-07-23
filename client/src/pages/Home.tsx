import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="flex h-full">
      <div className="flex-3">
        <div className="lg:pr-[50px] xl:pr-28 flex flex-col justify-start md:justify-center gap-12 h-full">
          <h1 className=" text-5xl xl:text-6xl font-bold leading-tight">Encuentra Tu Iglesia AIEE En Todo El Pais</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            perspiciatis eum alias voluptas illum optio totam quae, vitae
            doloribus! Tempora asperiores error cum perferendis sit.
          </p>
          <SearchBar/> 
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:flex-2 bg-blue-200 relative ">
        <img
          src="/bg-home.png"
          alt=""
          className="lg:max-w-[105%] xl:max-w-[115%] absolute right-0"
        />
      </div>
    </div>
  );
};

export default Home;
