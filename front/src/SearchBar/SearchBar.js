import DropdownMenus from './DropdownMenus/DropdownMenus';
import InputForm from './InputForm/InputForm';
import OptionLogement from './OptionLogement/OptionLogement';
import './SearchBar.scss';

function SearchBar({ handleSubmit }) {
  return (
    <div className="container">
      <DropdownMenus />
      <InputForm handleSubmit={handleSubmit}/>
      <OptionLogement />
    </div>
  )
}

export default SearchBar;
