import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import data from './components/Meme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Custom from './components/Custom';
import About from './components/About';


function App() {
  const [selected, setSelected] = useState();
  const [memeId, setMemeId] = useState();
  const [SearchSection, setSearchSection] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      alert('Somethimes the API is slow so reloading image my delay but it works . Please refresh If you encounter any errors !')
    }, 5000
    )
  }, [])
  /* search bar functionality */
  const handleSearch = () => {
    clearInput()

    const searchTerm = document.getElementById("search-bar").value; // The name you want to search for
    if (searchTerm === '') { alert('Search Bar Empty'); return }
    const sanitizedSearchTerm = searchTerm.replace(/[^\w\s]/gi, "").toLowerCase(); // Remove special characters and symbols

    const searchResult = data.find((item) => {
      const sanitizedMemeName = item.name.replace(/[^\w\s]/gi, "").toLowerCase(); // Remove special characters and symbols from meme name
      return sanitizedMemeName.includes(sanitizedSearchTerm);
    });


    if (searchResult) {
      // Found a match, access the blank URL
      setSelected(searchResult.blank);
      setMemeId(searchResult.id); // Set the id of the searched image
      console.log("Blank URL:", selected);
      console.log("Searched Image ID:", searchResult.id);
      alert('Sometimes API is Slow so Please wait !')
    } else {
      // No match found
      alert("Search result not found");
    }

  };

  const clearInput = () => {
    document.getElementById('top').value = ''
    document.getElementById('bottom').value = ''
  }



  return (
    <>
      <Router>
        <Navbar handleSearch={handleSearch} SearchSection={SearchSection} />
        <Routes>
          <Route path="/" element={<Body selected={selected} setSelected={setSelected} memeId={memeId} setMemeId={setMemeId} clearInput={clearInput} setSearchSection={setSearchSection} />} />
          <Route path="/customedit" element={<Custom setSearchSection={setSearchSection} />} />
          <Route path="/About" element={<About setSearchSection={setSearchSection} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App