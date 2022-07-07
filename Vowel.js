import React from "react";

function Vowel(props){

    var s = props.nam;
    var count = 0;
    for(var i =0 ;i<s.length;i++){
        if(s.charAt(i)=== 'a' || s.charAt(i)=== 'e' || s.charAt(i)=== 'i' || s.charAt(i)=== 'o' || s.charAt(i)=== 'u'  ){
            count++;
        }
    }

    var z ="";
    if(count===5){
        z = s;
    }else{
        z = "";
    }


    return(
        <div>
            <p>{z}</p>
        </div>
    );
}


export default Vowel;