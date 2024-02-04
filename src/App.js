import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Secondpage from "./components/Secondpage";
import Pageheader from "./components/Pageheader";
import ThirdPage from "./components/Thirdpage";
import Fourthpage from "./components/Fourthpage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage/SixthPage";
import SeventhPage from "./components/SeventhPage/SeventhPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Secondpage />
      <Pageheader />
      <ThirdPage />
      <Fourthpage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />

      <Footer />
    </div>
  );
}

export default App;
