"use client"
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterSelectorCourses = () => {
  const simpsons = ["Ascending Order ","Descending Order ", "completed", "incompleted", "Latest"];
  const [selectedSimpson, setSelectedSimpson] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSimpson(event.target.value);
  };

  return (
    <div className='pt-6 '   >
      <select
        className="select "
        value={selectedSimpson}
        onChange={handleSelectChange}
      >
        <option disabled value="" className='btn  ' >Filter </option>
        {simpsons.map((simpson, index) => (
          <option key={index} value={simpson} className=' bg-[#e1b382] text-[#2d545e]'  >
            {simpson}
          </option>
        ))}
      </select>

      
    </div>
  );
};

export default FilterSelectorCourses;
