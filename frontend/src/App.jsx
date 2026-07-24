import React, { useState, useEffect } from 'react';
import BreedSelector from './components/BreedSelector';
import BreedDetails from './components/BreedDetails';
import './App.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreedId, setSelectedBreedId] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/breeds`);
      const data = await response.json();

      if (data.success) {
        setBreeds(data.data);
      }
    } catch (err) {
      setError('Failed to load breeds. Please try again.');
      console.error('Error fetching breeds:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBreedChange = async (breedId) => {
    setSelectedBreedId(breedId);
    if (breedId) {
      try {
        const response = await fetch(`${API_BASE_URL}/breeds/${breedId}`);
        const data = await response.json();

        if (data.success) {
          setSelectedBreed(data.data);
          setError('');
        } else {
          setError(data.error || 'Failed to load breed details');
          setSelectedBreed(null);
        }
      } catch (err) {
        setError('Failed to load breed details. Please try again.');
        console.error('Error fetching breed:', err);
        setSelectedBreed(null);
      }
    } else {
      setSelectedBreed(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Cat Breeds Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing cat breeds from around the world
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {!error && (
            <BreedSelector
              breeds={breeds}
              selectedBreed={selectedBreedId}
              onChange={handleBreedChange}
            />
          )}

          {error && (
            <div className="glass-card p-8 text-center">
              <p className="text-red-500">{error}</p>
              <button
                onClick={fetchBreeds}
                className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {selectedBreed && (
            <BreedDetails breedId={selectedBreed.id} breed={selectedBreed} />
          )}

          {isLoading && !error && (
            <div className="glass-card p-8 text-center">
              <div className="loading-spinner mx-auto mb-4"></div>
              <p className="text-gray-500">Loading cat breeds...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500">
          <p>Built with React, Tailwind CSS, and Node.js</p>
        </footer>
      </div>
    </div>
  );
}

export default App;