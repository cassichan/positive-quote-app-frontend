import "./App.css";
import Header from "../src/Components/Header.jsx";
import Hero from "./Components/Hero";
import AddQuote from "./Components/AddQuote";
import Footer from "../src/Components/Footer.jsx";
import QuoteList from "./Components/QuoteList";
import CatForm from "./Components/CatForm";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <CatForm/>
      <AddQuote/>
      <QuoteList />
      <Footer />
    </>
  );
}

export default App;
