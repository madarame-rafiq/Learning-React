import React, { use, useState } from 'react'
import useGitHubApi from '../hooks/useGitHubApi';

function SearchAcc({ searchBarSelected, setSearchBarSelected, setUserData, setRepoData, userData }) {

    const [usr, repo] = useGitHubApi(userData)

    const [userInput, setUserInput] = useState("");


    const handleSearch = (e) => {
        e.preventDefault();
        
        setUserData(usr);
        setRepoData(repo);

    }


  return (
    <form className={` transition-all duration-500 bg-white flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${ searchBarSelected ? "w-[25%] top-[55px] shadow-[0_0_3px_rgba(255,255,255,0.6)]" : "w-[35%] top-1/2 shadow-[0_0_8px_rgba(255,255,255,0.6)]" } `}  
        onClick={() => setSearchBarSelected(true)}
        onSubmit={handleSearch}
    >
        <input type="text" placeholder='Search here...' className='p-2 border-none outline-none  flex-1 '
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
        />
        <button type='submit' className='bg-green-700 text-white font-sans font-medium p-2 cursor-pointer hover:bg-green-800' >search</button>
    </form>
  )
}

export default SearchAcc