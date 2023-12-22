import React, { useState, ChangeEvent } from 'react';
import "./GenericSelect.css"
import { getLocations } from '../../services/service';

interface Location {
  name: string
}
const GenericSelect = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const response = await getLocations(value)
    const locations = response.data.locations.map((location: Location) => location.name)
    setItems(locations)
    setShowDropdown(!!value);
  };

  const handleSelect = (item: string) => {
    setInputValue(item);
    setShowDropdown(false);
  };
  const handleClear = () => {
    setInputValue('');
    setItems([]);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col w-full 1/2  mt-8">
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Start"
          className="w-full md:w-full px-4 py-2 border rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
        />
        {inputValue && (
          <button
            className="absolute top-0 right-0 h-full flex items-center pr-3 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={handleClear}
          >
            <svg height="10" viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="#141414" fill-rule="nonzero"><path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0 2c-6.627417 0-12-5.372583-12-12s5.372583-12 12-12 12 5.372583 12 12-5.372583 12-12 12z" /><path d="m9.20710678 16.2071068c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l6.99999998-6.99999998c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356z" /><path d="m7.79289322 9.20710678c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0l7.00000002 6.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0z" /></g></svg>        </button>
        )}
        {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border rounded  shadow-md ">

            <ul
              role="listbox"
              className="scroll-container h-48"
            >
              {items.map((item, index) => (
                <li
                  key={index}
                  id={`listbox-item-${index}`}
                  role="option"
                  className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-dbdada hover:shadow-sm hover:rounded-sm"
                  onClick={() => handleSelect(item)}
                >
                  <div className="flex items-center">
                    <img
                      src="https://app.rheinbahn.de/static/media/stop.940ee74e.svg"
                      className="flex-shrink-0 h-6 w-6 rounded-full"
                    />
                    <span className="ml-3 block truncate">{item}</span>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        )}
      </div>
    </div>
  );
}
export default GenericSelect