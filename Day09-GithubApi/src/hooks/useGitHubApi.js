import { useEffect, useState } from "react"


const useGitHubApi = (userName) => {
    const [userData, setUserData] = useState();
    const [repoData, setRepoData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(!userName)   return

        const getData = async() => {
            const userResponse = await fetch(`https://api.github.com/users/${userName}`);
            const user = userResponse.json();

            const repoResponse = await fetch(`https://api.github.com/users/${userName}/repos`);
            const repos = repoResponse.json();

            console.log(user)
            console.log(repos)

            return { user, repos }
        }

        getData();

    }, [userName]);
}

export default useGitHubApi;