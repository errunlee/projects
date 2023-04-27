import { createContext, useEffect, useState } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
const GithubContext=createContext();

const GithubProvider=({children})=>{
    const [githubUser,setGithubUser]=useState('');
    const [repos,setRepos]=useState('')
    const [followers,setFollowers]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
   const [request,setRequest]=useState(0)
    //fetch searched user and set it to githubUser
    const searchUser=async(username)=>{       
        try{
            setLoading(true)
            const infourl=`https://api.github.com/users/${username}`
            const followerurl=`https://api.github.com/users/${username}/followers`
            const repourl=`https://api.github.com/users/${username}/repos`
            const data=await fetch(infourl);
            const response=await data.json();
            if(!response.message){
                const data1=await fetch(followerurl);
                const response1=await data1.json();
                const data2=await fetch(repourl);
                const response2=await data2.json();
                setGithubUser(response);
                setRepos(response2)
                setFollowers(response1)
                setError(false)
                setLoading(false);
            }
            else{
               setError(true)
               setLoading(false)
            }
//check request remaining
            const res=await fetch('https://api.github.com/rate_limit')
            const resp=await res.json();
            setRequest(resp.rate.remaining);
        }
        catch(error){
            console.log("error"+error)
            setFollowers(mockFollowers)
            setRepos(mockRepos)
            setGithubUser(mockUser)
            setError(true)
            setLoading(false);
        }
    }
   useEffect(()=>{
    searchUser('errunlee')
   },[])
    return(
<GithubContext.Provider value={{githubUser,repos,followers,searchUser,setLoading,loading,error,request}}>{children}</GithubContext.Provider>)
}

export {GithubContext,GithubProvider}