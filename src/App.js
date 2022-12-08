
import axios from "axios";
import React,{useState}  from "react";
import data from "./Mon context";


 function App(){

  const[data,setData] = useState('');
  

  return (
   <div>
  
   
    <button 
    onClick={() => {
      axios
      .get("https://jsonplaceholder.typicode.com/todos/1" )
      .then((result)=> {
        setData(result.data);
      })
     
      }}
 
    >
      se connecter
      </button>
    <p>{data.title}</p>
    <p>{data.id}</p>
    </div>
  );
}
export default App;

