import React, { use, useState } from 'react'
import SearchAcc from './components/SearchAcc'
import Card from './components/Card';


function App() {
  
  const [searchBarSelected, setSearchBarSelected] = useState(false);
  const [userData, setUserData] = useState();
  const [repoData, setRepoData] = useState([])
  
  return (

    
    <div className="bg-gradient-to-b from-[#0d1117] to-[#161b22] min-h-screen relative">
      <SearchAcc searchBarSelected={searchBarSelected} setSearchBarSelected={setSearchBarSelected} setRepoData={setRepoData} setUserData={setUserData} userData={userData} />

      <Card />
    </div>
  )
}

export default App