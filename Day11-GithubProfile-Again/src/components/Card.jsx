

function Card({ userData, loading }) {


  if (loading){
    return (
     <div className="h-50 w-50 animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
   )
  } 
    

  if(!userData?.login){
    return(
      <p className="text-white text-5xl">No user found</p>
    )
  }

  return (
    <div className="bg-[#f6f8fa] flex h-[300px] w-[600px] rounded-xl shadow-lg p-6 items-center justify-between">
      <div className="flex justify-center items-center" >
        <img src={userData.avatar_url} alt="pfp"
        className="w-70 h-70 rounded-full object-cover border-4 border-gray-400 shadow-md" />
      </div>
      <div className="w-[50%] text-center font-bold text-lg">
        <h5>username:- {userData.login}</h5>
        <h5>name:- {userData.name}</h5>
        <h5>followers:- {userData.followers}</h5>
        <h5>repos:- {userData.public_repos}</h5>
      </div>
      

    </div>
  )
}

export default Card