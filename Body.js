import React, { useEffect, useState, useRef } from 'react'
import data from './Meme'

function Body({ selected, setSelected, memeId, setMemeId, clearInput, setSearchSection }) {
  const [memes, setMemes] = useState([]);
  const [top_text, setTop_text] = useState();
  const [bottom_text, setBottom_text] = useState();
  const [EditedMeme, setEditedMeme] = useState();
  const topRef = useRef(null);  

  useEffect(() => {
    setSearchSection(true)
  })

  useEffect(() => {      
    // Function to fetch memes from Memegan API
    async function fetchMemes() {
      let arr = []
      for (let i = 0; i < 50; i++) {
        arr[i] = data[i]
      }
      setMemes(arr)
      // This will log the updated 'memes' state
    }
    // Call the fetchMemes function to fetch memes when the component mounts
    fetchMemes();
  }, []);
  

  useEffect(() => {
    // Call the function to generate the edited meme whenever top_text or bottom_text changes
    FetchEditedMeme()
  }, [top_text, bottom_text]);

  const FormEdit = () => {
    setTop_text(document.getElementById('top').value)
    setBottom_text(document.getElementById('bottom').value)
    FetchEditedMeme()
    console.log(top_text, bottom_text)
  }
  const FetchEditedMeme = async () => {
    if (memeId !== undefined && memeId.trim() !== '') {
      let url = `https://api.memegen.link/images/${memeId}`;

      if (top_text !== 'empty') {
        if (top_text !== '') url += `/${top_text}`;
        console.log("1");
      }
      if (bottom_text !== 'empty') {
        // If top_text is empty or undefined, add bottom_text directly
        if ((top_text === 'empty' || top_text === '') && bottom_text !== '')
          url += `/_/${bottom_text}`;
        else if (bottom_text !== '') url += `/${bottom_text}`;
      }

      url += `.png`; // Use the selected format

      setEditedMeme(url);
      console.log(url);
    } else {
      // Handle the case where memeId is empty or undefined
      console.log('memeId is empty or undefined');
    }
  };


  const loadMoreMemes = () => {
    const currentLength = memes.length;
    if (currentLength >= data.length) {
      alert('Memes not Available to fetch ! Sorry ')
      return
    }
    const additionalMemes = data.slice(currentLength, currentLength + 4); // Load 4 more memes
    setMemes([...memes, ...additionalMemes]);
  };





  return (
    <div className='Body pt-20  relative h-[100%] min-h-screen'>

      <div className="top grid grid-cols-1 md:grid-cols-2 " ref={topRef}>
        <div className="left flex flex-col h-[400px] justify-center items-center md:flex-row">
          <div className="image max-w-[60%] md:max-w-[50%]  h-[50%] md:h-[80%] mr-4 p-2">
            <img src={selected} alt="" className='h-full' />
          </div>
          <div className="form flex flex-col justify-center ">
            <div className="title mb-10 text-4xl text-black">Edit the MEME</div>
            <input type="text" className='p-2 rounded-md mb-4' id="top" placeholder="Top Text" />
            <input type="text" className='p-2 rounded-md mb-4' id="bottom" placeholder="Bottom Text" />
            <button type="button" onClick={FormEdit} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md'>Submit</button>
          </div>
        </div>
        <div className="right flex flex-col justify-center items-center">
          <h2 className='text-2xl pt-4'>Preview of the Edited MEME</h2>
          <div className="image max-w-[60%] max-h-[300px] mr-4 flex mt-8 mb-4 ">
            <img src={EditedMeme} alt='select below memes or go to custom edit' className='h-full' />
          </div>
          <div>
            <select
              onChange={(e) => {
                try{
                setEditedMeme(EditedMeme.slice(0,-3)+e.target.value)
                }catch(err){
                  alert('please select a template !')
                }
              }}
              
              className="p-2 rounded-md mb-4"
            >
              <option value="png">PNG</option>
              <option value="gif">GIF</option>
            </select>

            <a
              href={EditedMeme}
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
            >
              Download
            </a>          </div>
        </div>
      </div>
      <h1 className='md:text-4xl text-xl pt-4 flex items-center justify-center'>Select a MEME Template</h1>
      <div className="bottom grid grid-cols-2 md:grid-cols-4 mx-4 my-[20%] gap-6">
        {
          memes.map(({ id, blank, example }) => {
            return (
              <div key={id} className="card flex-col justify-center items-center w-full md:max-w-[70%] mx-auto">
                <img src={example.url} alt={`meme-${id}`} />
                <button
                  className='bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white py-2 px-4 rounded-md mt-2'
                  onClick={() => { setSelected(blank); console.log(selected); setMemeId(id); clearInput(); topRef.current.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Select
                </button>
              </div>
            );
          })
        }
      </div>

      <button className="bg-blue-900 p-1 rounded-md text-white mx-auto absolute -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={loadMoreMemes} disabled={memes.length >= data.length - 4}
      >Add More</button>

    </div>

  )
}

export default Body