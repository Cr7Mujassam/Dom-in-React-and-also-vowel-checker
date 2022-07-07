import React,{useState} from "react";
import Vowel from "./Vowel";

function Map(){
    
    var [name,setName] = useState("");

    function change(event){
        setName(event.target.value)
        console.log(event.target.value)
    }

  function click(){
    var s;
     s = name;
     console.log(s);
     document.getElementById("p2").innerHTML = s ;
  }

    
    return(
        <center>
            <h1 className="display-1">Vowel Name</h1>
            <input type="text" placeholder="Enter Name" onChange={change}/>
            <button type="submit" onClick={click}>Enter to know</button>
            <p id="p2"></p>
            <Vowel nam={name}/>
        </center>

    );
}

export default Map;