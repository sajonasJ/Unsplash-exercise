// import logo from './logo.svg';
// import { Counter } from './components/counter/Counter';
import "./scss/App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";
import Main from "./components/main/main";
import Section from "./components/section/section";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main/>
      <Section/>
      <Footer />
    </div>
  );
}

export default App;
