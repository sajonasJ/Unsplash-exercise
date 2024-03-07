import { useDispatch, useSelector } from 'react-redux';
import { updateSearchText } from '../../../state/store';
import '../../../scss/searchbar.scss';

export function Searchbar() {
  const dispatch = useDispatch();
  let inputValue = '';

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputValue = event.target.value;
  };

  const handleSearch = () => {
    dispatch(updateSearchText(inputValue));
  };

  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Searchbar;
