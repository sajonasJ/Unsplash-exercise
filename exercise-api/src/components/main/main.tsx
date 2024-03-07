// Main.tsx
import { useSelector } from 'react-redux';
import "../../scss/main.scss";
import Splashcard from "../splashcard/splashcard";
import { RootState } from '../../state/store'; // replace with the actual path to your store

export function Main() {
  const photos = useSelector((state: RootState) => state.search.photos);

  return (
    <div className="main-container">
      {photos.map((photo, index) => (
        <Splashcard key={index} photo={photo} />
      ))}
    </div>
  );
}

export default Main;