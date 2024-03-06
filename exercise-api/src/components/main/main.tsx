import "../../scss/main.scss";
import Splashcard from "../splashcard/splashcard";

export function Main() {
  const splashcards = Array.from({ length: 15 }, (_, index) => (
    <Splashcard key={index} />
  ));

  return (
    <div className="main-container">

      {splashcards}
    </div>
  );
}

export default Main;
