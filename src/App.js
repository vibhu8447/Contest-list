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

      <div className="container">
        
        <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Name</td>
                        
                        <td>Start</td>
                        <td>Length </td>
                        <td> Status </td>

                    </tr>
                    
                </thead>
                <tbody>
                {
                          tours.result.map((item)=>
                        {
                        return <tr> <Item item={item} /></tr> ;
                        })
                      }
     
                  </tbody> 

            </table>
    
      </div>
    );
}

export default App;
// {
//   tours.result.map((item)=>
//   {
//   return (<tr> <Item item={item} /></tr>);
//   })
// }