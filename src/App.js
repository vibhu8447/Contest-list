import { useEffect, useState } from "react";
import Item from "./Item";
import React from "react";
import Loading from  './Loading';

function App() {
 
  const [loading, setLoading] = useState(true)

  const [data,setdata]=useState([]);

  const url ='https://codeforces.com/api/contest.list?gym=false';

  const fetchTours = async () => {
    setLoading(true)

    try {

      const response = await fetch(url);
      const tour = await response.json();
      setLoading(false);
      setdata(tour.result);
    } 
    catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();
   
  },[]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(loading===false)
  {

    
    return (

      <>
      <div className="display-1">
      <h1 className="display-1 text-center bold"> Codeforces Contest List</h1>
      </div>
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
                
                data.map((item)=>
                  {
                   
                      return <tr> <Item  key={item.name} item={item} /></tr> ;
                  })
              }
                  </tbody> 

            </table>
    
      </div>
      </>
    );
  }
  
}

export default App;
