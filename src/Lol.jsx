import React, { useState } from "react";

const Lol = () => {
  const [data, setData] = useState([]);
  const baseurl = "https://jsonplaceholder.typicode.com/todos";

  const fetchurl = () => {
    fetch(baseurl)
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const Post = () => {
    fetch(baseurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,              
        title: "vathuthen",
        completed: false,       
      }),
    })
      .then((response) => response.json())
      .then((res) => setData((prevData) => [...prevData, res])) 
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Hello and Welcome to Fetch</h1>
      <button onClick={fetchurl}>Fetch</button>
      <button onClick={Post}>Post</button>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>User ID: {item.userId}</p> 
        </div>
      ))}
    </div>
  );
};

export default Lol;