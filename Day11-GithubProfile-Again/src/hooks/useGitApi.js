import { useEffect, useState } from "react"


const useGitApi = (userName) => {
    
    const [userData, setUserData] = useState({})
    const [repoData, setRepoData] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState("")


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            try{
                const userRes = await fetch(`https://api.github.com/users/${userName}`)
                const user = await userRes.json()

                const repoRes = await fetch(`https://api.github.com/users/${userName}/repos`)
                const repo = await repoRes.json()

                setUserData(user)
                setRepoData(repo)
            }catch(err){
                setErr(err)
            }finally{
                setIsLoading(false)
            }
        }

        if(userName){
            getData()
        }

    }, [userName]);

    if (Object.keys(userData).length !== 0)
        return { userData, repoData, isLoading, err }
    else
        return null

}

export default useGitApi
