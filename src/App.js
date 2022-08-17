import "./App.css";
import Header from "../src/Components/Header.jsx";
import AddQuote from "./Components/AddQuote";
import Footer from "../src/Components/Footer.jsx";
import QuoteList from "./Components/QuoteList";

function App() {
  return (
    <>
      <Header />
      <AddQuote/>
      <QuoteList />
      <Footer />
    </>
  );
}

export default App;
