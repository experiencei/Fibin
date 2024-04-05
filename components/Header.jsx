import React from "react";
import SearchBar from "./part-components/search-bar";
import SortButton from "./part-components/sort-buttons";

function Header() {
  return (
    <header className="px-5">
      <SearchBar />
      <div>
        <SortButton />
      </div>
    </header>
  );
}

export default Header;
