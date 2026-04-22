import React, { use, useState } from 'react'

function SearchBar({ setUserName }) {

    const [searchName, setSearchName] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchName){
            setUserName(searchName)
            setSearchName("")
        }
        else
            alert("Please write the name")
    }

  return (
    <div>
        <form onSubmit={handleSearch} className='bg-white w-[500px] flex items-center rounded-xl ' >
            <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder='Search here...'
            className='px-3 py-2 flex-1 outline-none border-none' />
            <button type='submit'
            className='px-3 py-3 text-white font-medium bg-green-700 rounded-xl cursor-pointer hover:bg-green-800' >search</button>
        </form>
    </div>
  )
}

export default SearchBar