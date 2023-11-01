"use client"
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterSelectorCourses = () => {
  const simpsons = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
  const [selectedSimpson, setSelectedSimpson] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSimpson(event.target.value);
  };

  return (
    <div>
      <select
        className="select w-full max-w-xs"
        value={selectedSimpson}
        onChange={handleSelectChange}
      >
        <option disabled value="" className='btn btn-ghost' >Filter <FaFilter/> </option>
        {simpsons.map((simpson, index) => (
          <option key={index} value={simpson}>
            {simpson}
          </option>
        ))}
      </select>

      
    </div>
  );
};

export default FilterSelectorCourses;
