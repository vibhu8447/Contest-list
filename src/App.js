import { useEffect, useState } from "react";
import Item from "./Item";
import React from "react";
import Loading from  './Loading';
function App() {
 
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const url ='https://codeforces.com/api/contest.list?gym=false';

  const fetchTours = async () => {
    setLoading(true)

    try {

      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } 
    catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();
    console.log(tours.result);
  },[]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  console.log(tours.result);
    return (

      <div className="app">
                {  
        tours.result.map((item)=>
        {
         return (<Item item={item}></Item>);
        })
      }

      </div>
    );
}

export default App;
