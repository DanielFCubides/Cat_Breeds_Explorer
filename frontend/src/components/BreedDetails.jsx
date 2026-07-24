import React, { useState, useEffect } from 'react';

const BreedDetails = ({ breedId, breed }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (breed) {
      setTimeout(() => setIsLoading(false), 300);
    }
  }, [breed]);

  if (isLoading) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <p className="text-gray-500">Loading breed information...</p>
      </div>
    );
  }

  if (!breed) {
    return (
      <div className="glass-card p-8 text-center">
        <svg
          className="w-24 h-24 mx-auto mb-4 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a Breed</h3>
        <p className="text-gray-500">Choose a cat breed from the dropdown to see its details</p>
      </div>
    );
  }

  const breedImageUrl = breed?.image_id
    ? `https://cataas.com/cat?type=byBreed&id=${breed.image_id}&width=600&height=600`
    : '';

  return (
    <div className="glass-card p-8 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 breed-image-container">
          {breedImageUrl && (
            <img
              src={breedImageUrl}
              alt={`${breed.name} cat`}
              className="w-full h-64 md:h-full object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          )}
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{breed.name}</h2>

          <div className="flex items-center gap-2 mb-6">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 text-lg">{breed.origin}</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {breed.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              {breed.temperament}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Life Span</span>
              </div>
              <p className="text-gray-800 text-lg">{breed.life_span}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
                <span className="font-semibold">Weight</span>
              </div>
              <p className="text-gray-800 text-lg">
                {breed.weight.metric} kg / {breed.weight.imperial} lbs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetails;