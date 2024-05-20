import "./App.css";

import Companies from "./Components/Companies";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Opportunities from "./Components/Opportunities";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Courses />
      <Work />
      <Companies />
      <Opportunities />
      <Footer />
    </div>
  );
}

export default App;
