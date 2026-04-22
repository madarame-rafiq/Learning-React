
function Repos({ repoData, loading }) {

    repoData.forEach((data) => console.log(data))


  if(!loading)
    return(
        <div className="grid grid-cols-3 gap-10">
            {
                repoData.map((repo) => (
                    <div key={repo.id}
                    className="bg-[#f6f8fa] rounded-2xl p-5 shadow-xl" >
                        <h3 className="text-4xl mb-4" >{repo.name}</h3>
                        <div className="flex items-center justify-between">
                            <div>
                                <p>id: {repo.id}</p>
                                <p>full name: {repo.full_name}</p>
                            </div>
                            <div>
                                <p>{repo.private ? "Private": "Public"}</p>
                                <a href={repo.clone_url} target="_blank" className="text-red-600" >Open repo</a>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
        
    )
}

export default Repos