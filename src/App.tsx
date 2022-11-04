import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="bg-desktop-pattern bg-no-repeat bg-[position:40%_center] md:bg-[position:10%_center] bg-desktop-pattern-size-mobile md:bg-desktop-pattern-size-desktop rounded-bl-[100px]">
        <Header />
        <Intro />
      </div>
      <main className="flex flex-col items-center justify-center overflow-hidden">
        <h1 className="font-semibold text-4xl text-center mt-24 md:mt-40">
          Designed for the future
        </h1>
        <Main />
      </main>
      <footer className="mt-32">
        <Footer />
      </footer>
    </>
  );
}

export default App;
