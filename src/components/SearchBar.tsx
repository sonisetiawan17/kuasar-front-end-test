import { BsSearch } from 'react-icons/bs';

import '../styles/search-bar.css';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="search">
      <div className="form_input">
        <input
          type="text"
          placeholder="Search country name..."
          value={value}
          onChange={onChange}
        />
        <BsSearch size={16} className="search_icon" />
      </div>
    </div>
  );
};

export default SearchBar;
