import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search"
        value={search} // ✅ controlled input using prop
        onChange={(e) => onSearchChange(e.target.value)} // ✅ calls callback
      />
    </div>
  );
}

export default Filter;
