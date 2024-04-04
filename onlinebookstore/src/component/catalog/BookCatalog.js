import React, { useState, useEffect } from 'react';

function BookCatalog() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');

  useEffect(() => {
    fetchBooks(); // Fetch books on component mount
  }, []);

  // Function to fetch books from API
  const fetchBooks = async () => {
    try {
      const response = await fetch('api/books');
      const data = await response.json();
      setBooks(data); // Set fetched books to state
      setFilteredBooks(data); // Set fetched books as initial filtered books
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle genre filter change
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // Function to handle availability filter change
  const handleAvailabilityChange = (event) => {
    setSelectedAvailability(event.target.value);
  };

  // Function to filter books based on search term, genre, and availability
  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre =
        selectedGenre === 'All' || book.genre === selectedGenre;
      const matchesAvailability =
        selectedAvailability === 'All' ||
        (selectedAvailability === 'Available' && book.availability) ||
        (selectedAvailability === 'Out of stock' && !book.availability);
      return matchesSearch && matchesGenre && matchesAvailability;
    });
    setFilteredBooks(filtered);
  }, [books, searchTerm, selectedGenre, selectedAvailability]);

  return (
    <div>
      <h2>Book Catalog</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Genre filter */}
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="All">All Genres</option>
        <option value="Mystery">Mystery</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romance">Romance</option>
        {/* Add more genre options as needed */}
      </select>

      {/* Availability filter */}
      <select value={selectedAvailability} onChange={handleAvailabilityChange}>
        <option value="All">All Availability</option>
        <option value="Available">Available</option>
        <option value="Out of stock">Out of stock</option>
      </select>

      {/* Display list of books */}
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Price: ${book.price}</p>
            <p>Availability: {book.availability ? 'Available' : 'Out of stock'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookCatalog;