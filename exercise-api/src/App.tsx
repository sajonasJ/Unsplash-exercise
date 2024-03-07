import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import "./scss/App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";
import Main from "./components/main/main";
import Section from "./components/section/section";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "PHOTOS_FETCH_REQUESTED" });
  }, [dispatch]);

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
