import React, { useEffect, useState } from 'react';
import User from '../User/User';


const Home = () => {

    const [users,setUser] = useState([]);
    useEffect(()=>{
        const url ='https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (
        <div>
            {
                users.map(user => <User user ={user}></User>)
            }
            
        </div>
    );
};

export default Home;