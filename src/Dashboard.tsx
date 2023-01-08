import { Card, CardContent, CardHeader } from "@mui/material";

import React, { useState, useEffect } from 'react';

function collectAnswer(){console.log("bb")

}

function finishExam(){console.log("aa")

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export const Dashboard = () => {//console.log('tom oroloo');
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    // const [count, setCount] = useState(0);

    useEffect(() => {//console.log('oroloo');


    // fetch('http://localhost:3000/exam/answers')
    //     .then(response => response.json())
    //     .then(commits => {console.log(commits); 
    //         setData(commits); console.log(data); 
    //         // renderAnswer();  
    //         if( rows.length == 0) {console.log('for oroloo');
    //             for (let i = 0; i < commits.length; i++) {
    //                 setRows(row => [...row, <div key={getRandomInt(100)}>{commits[i].Atext}</div>]  )
    //             }
    //         }
            
        
    //     });


      },[]);

      //<input type="checkbox" value="aabb" onChange={()=>collectAnswer()}/> <div>{data[i].Atext}</div>
      function renderAnswer(){
        
            
        
      }


    return(
        <div>{rows}</div>

        
    
       
    
        
    //   <Card>
    //     <CardHeader title="Welcome to the exam" />
    //     <CardContent> sldsald </CardContent>
    
        // {rows}
    
    //     <input type="submit" value="Submit" onClick={()=>finishExam()} />
    //   </Card>
    )

}

