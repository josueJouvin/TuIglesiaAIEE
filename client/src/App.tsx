import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] xl:max-w-[1366px] mx-auto px-5 flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="h-outlet">
        <Home />
      </div>
    </div>
  );
}

export default App;
