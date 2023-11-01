// components/Dropdown.tsx
"use client"
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterAsn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown  ml-5 mt-14 ">
      <label tabIndex={0} className="btn btn-success     " onClick={toggleDropdown}>
       <FaFilter/> <p>Filter</p>
      </label>
      {isOpen && (
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FilterAsn;

