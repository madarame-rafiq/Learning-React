import React, { useState } from 'react'
import useGitApi from './hooks/useGitApi'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import Repos from './components/Repos'

function App() {

  const [userName, setUserName] = useState(null)

  const data = useGitApi(userName)
  // console.log(data)

  return (
    <div className='w-screen min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black p-20 flex flex-col justify-between items-center gap-30 font-sans ' >
      <SearchBar setUserName={setUserName} />
      {data ?
        <Card userData={data.userData} loading={data.isLoading} />
      : null}

        {data ?
          <Repos repoData={data.repoData} loading={data.isLoading} />
        : null  
      }
      
    </div>
  )
}

export default App