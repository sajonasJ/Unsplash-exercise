import "../../scss/splashcard.scss";

interface Photo {
  urls: {
    small: string;
  };
  alt_description: string;
}
interface SplashcardProps {
  photo: Photo;
}
export function Splashcard({ photo }: SplashcardProps) {
  return (
    <figure className="splashcard-container">
      <img src={photo.urls.small} alt={photo.alt_description} />
      <figcaption>{photo.alt_description}</figcaption>
    </figure>
  );
}

export default Splashcard;
