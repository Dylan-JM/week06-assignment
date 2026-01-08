import { useState } from "react";

export default function SearchBar({ setInputValue }) {
  const [searchValue, setSearchValue] = useState("");

  function handleClick() {
    setInputValue(searchValue);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={searchValue}
          placeholder="Search Images"
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
}
