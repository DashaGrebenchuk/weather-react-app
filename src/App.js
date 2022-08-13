import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather city="Warsaw" />
      <Footer />
    </div>
  );
}
