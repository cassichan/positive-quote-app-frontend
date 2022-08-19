import "./App.css";
import TopNav from "./Components/TopNav";
import BottomNav from "./Components/BottomNav";
import Hero from "./Components/Hero";
import AddQuote from "./Components/AddQuote";
import Footer from "../src/Components/Footer.jsx";
import QuoteList from "./Components/QuoteList";
import CatForm from "./Components/CatForm";

function App() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Hero />
      <CatForm />
      <AddQuote />
      <QuoteList />
      <Footer />
    </>
  );
}

export default App;
