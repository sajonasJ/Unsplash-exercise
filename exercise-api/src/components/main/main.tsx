// Main.tsx
import { useSelector } from 'react-redux';
import "../../scss/main.scss";
import Splashcard from "../splashcard/splashcard";
import { RootState } from '../../state/store'; // replace with the actual path to your store

function shuffleArray(array: any[]) {
  let arr = [...array]; // create a copy of the array
  let currentIndex = arr.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}


export function Main() {
  const photos = useSelector((state: RootState) => state.search.photos);
  const shuffledPhotos = shuffleArray(photos);

  return (
    <div className="main-container">
      {shuffledPhotos.map((photo, index) => (
        <Splashcard key={index} photo={photo} />
      ))}
    </div>
  );
}

export default Main;