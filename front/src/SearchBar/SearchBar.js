import DropdownMenus from './DropdownMenus/DropdownMenus';
import InputForm from './InputForm/InputForm';
import OptionLogement from './OptionLogement/OptionLogement';
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="container">
      <DropdownMenus />
      <InputForm />
      <OptionLogement />
    </div>
  )
}

export default SearchBar;
