import MainPage from "./components/MainPage/MainPage";

import ExclusivePage from "./components/ExclusivePage/ExclusivePage";
import ContactUs from "./components/ExclusivePage/ContactUs";
import AppDemo from "./components/AppDemo";
import WorkoutFeature from "./components/WorkoutFeature/WorkoutFeature";
import TestimonialPage from "./components/TestimonialPage/TestimonialPage";
import Footer from "./components/Footer";
import  DownloadApp from "./components/DownloadApp";

function App() {
  return (
    <div className="App">
      
      <MainPage />
      <DownloadApp/>
      <ExclusivePage />
      <ContactUs />
      <AppDemo/>
      <WorkoutFeature />
      <TestimonialPage />

      <Footer />
    </div>
  );
}

export default App;
