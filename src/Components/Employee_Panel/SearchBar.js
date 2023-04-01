import React, { useState } from 'react';
import './NavbarStyle.css';

const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const searchData = [
  { name: "Photo"},
  { name: "news"},
  { name: "Thoughts"},
  { name: "New joiner"},
  { name: "birthdays"},
  { name: "work anniversaries"},
  { name: "documents"},
];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    searchData.filter((data) => {
    return data.name.match(searchInput);
});
}

return (
<div className="search-row">

<input
   className='input'
   type="search"
   placeholder= "Search here"
   onChange={handleChange}
   value={searchInput} />

<table>

{searchData.map((data) => {

<div>
  <tr>
    <td>{data.name}</td>
  </tr>
</div>
}
)}
</table>

</div>
);

};

export default SearchBar;