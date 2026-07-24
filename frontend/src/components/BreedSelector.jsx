import React from 'react';

const BreedSelector = ({ breeds, selectedBreed, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-8">
      <label htmlFor="breed-select" className="block text-sm font-semibold text-gray-700 mb-2">
        Select a Cat Breed
      </label>
      <select
        id="breed-select"
        value={selectedBreed || ''}
        onChange={handleChange}
        className="w-full md:w-96 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:border-primary-300 text-gray-700"
      >
        <option value="">-- Choose a breed --</option>
        {breeds.map(breed => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedSelector;