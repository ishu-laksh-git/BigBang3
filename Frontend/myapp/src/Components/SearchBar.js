import React, { useState } from "react";
import Fuse from "fuse.js";
import "./Searchbar.css";

const places = [
  "New York",
  "Los Angeles",
  "San Francisco",
  "Chicago",
  "Miami",
  "Seattle",
  "Boston",
  "Austin",
  "Denver",
  "Portland"
];

function DropdownSearch() {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [autocompleteResults, setAutocompleteResults] = useState([]);

  const fuse = new Fuse(places);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (newValue.length >= 3) {
      setIsDropdownOpen(true);
      const results = fuse.search(newValue).map((result) => result.item);
      setAutocompleteResults(results); // Set the filtered results
    } else {
      setIsDropdownOpen(false);
      setAutocompleteResults([]); // Clear the results
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedValue(option);
    setInputValue(option); // Set the selected option as input value
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-search">
      <input
        type="text"
        className="form-control form-control-lg smaller-input"
        placeholder="Where to...?"
        value={inputValue}

        onChange={handleInputChange}
      />
      {isDropdownOpen && inputValue.length >= 3 && (
        <ul className="dropdown-options">
          {autocompleteResults.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownSearch;
