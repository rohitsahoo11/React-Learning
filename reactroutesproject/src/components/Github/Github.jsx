import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData()
    // const[data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rohitsahoo11')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    return(
        <>
        <div className='text-center bg-gray-700 m-4 p-4 text-white text-2xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
        </>
    )
}
export default Github

// In api call we can use loader in the Route using this...
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/rohitsahoo11')
    return response.json()
}