import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <section  className="flex-3">
        <div className="lg:pr-[50px] 2xl:pr-28 flex flex-col justify-start md:justify-center gap-12 h-full">
          <h1 className=" text-5xl xl:text-6xl font-bold leading-tight">
            Encuentra Tu Iglesia AIEE En Todo El Pais
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            perspiciatis eum alias voluptas illum optio totam quae, vitae
            doloribus! Tempora asperiores error cum perferendis sit.
          </p>
          <SearchBar />
        </div>
      </section>
      <section className="hidden lg:flex lg:items-center lg:flex-2 bg-blue-200/75 relative overflow-y-clip">
        <img
          src="/bg-home.png"
          alt=""
          className="lg:max-w-[105%] 2xl:max-w-[115%] absolute right-0"
        />
      </section>
    </>
  );
};

export default Home;
