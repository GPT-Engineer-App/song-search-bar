import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const { searchQuery } = useOutletContext();
  const [filteredSongs, setFilteredSongs] = useState([]);
  const songs = [
    "Song 1",
    "Song 2",
    "Song 3",
    "Another Song",
    "Yet Another Song",
  ]; // Replace with actual song data

  useEffect(() => {
    if (searchQuery) {
      setFilteredSongs(
        songs.filter((song) =>
          song.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredSongs(songs);
    }
  }, [searchQuery]);

  return (
    <div className="text-center">
      <h1 className="text-3xl">Your Blank Canvas</h1>
      <p>Chat with the agent to start making edits.</p>
      <div className="mt-4">
        {filteredSongs.length > 0 ? (
          <ul>
            {filteredSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
        ) : (
          <p>No songs found.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
