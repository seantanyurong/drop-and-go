import React from 'react'

const FilterComponent = ({ filterText, onFilter }) => (
    <div>
        <input
            type="text"
            value={filterText}
            onChange={onFilter}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
            placeholder="Search by Name"
        />
    </div>
  );

export default FilterComponent