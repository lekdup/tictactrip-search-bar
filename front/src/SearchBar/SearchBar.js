import DropdownMenus from './DropdownMenus/DropdownMenus';
import InputForm from './InputForm/InputForm';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="container">
      <DropdownMenus />
      <InputForm />
    </div>
  )
}

export default SearchBar;
