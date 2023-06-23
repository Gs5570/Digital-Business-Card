//components
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest.jsx";
import Footer from "./components/Footer";

//styles
import "./App.css";

function App() {
  return (
    <div className="digital-card-container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
