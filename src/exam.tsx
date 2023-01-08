// import { Card, CardContent, CardHeader } from "@mui/material";

import React, { useState, useEffect } from 'react';



export const Exam = () => {//console.log('tom oroloo');
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(0);

    const [sec, setSec] = useState(5000);
    const [intval, setIntval] = useState();

    useEffect(() => {console.log('oroloo');


   

      },[]);

      function collectAnswer(event){//console.log("bb", event.target.checked)
            // setCount(event.target.value)
            let selVal = event.target.value; 
            let ans = localStorage.getItem('ans');
            let spans = ans?.split(":");
            let x = selVal.split('_'); //console.log("bb", x )

            if (ans) {

                if (x[1] == 'y'){
                    setCount(count + Number(x[3]));
                    localStorage.setItem('ans', ans + ':' + selVal);
                }else { 
                    console.log('ls1', ans, spans);

                    // 
                    for(let i =0; i<spans.length; i++){
                        let spans1 = spans[i].split('_');
                        console.log('x=', x,spans1 )
                        if (spans1[0] == x[0]){
                            console.log('haslaa')
                            setCount((c)=>c -  Number(spans1[3]));
                            spans.splice(i, 1);
                            
                        }
                    }
                    console.log('ls1 atfet spliece', spans);
                    
                    let tempans = ''
                    for(let i =0; i<spans.length; i++){
                        tempans +=  spans[i] + ":"
                    }
                    console.log('ls1 atfet tempans', tempans);
                    tempans = tempans.substring(0, tempans.length-1) 
                    console.log('ls1 atfet tempans', tempans, count, Number(x[3]));
                    setCount((c)=>c + Number(x[3]));
                    if (tempans)localStorage.setItem('ans', tempans + ':' + selVal);
                    else localStorage.setItem('ans', selVal);
                    
                    console.log('ls2', localStorage.getItem('ans'))
                    // console.log('data1', ans); //console.log("dd", dd)
                }

                

            }
            else {
                localStorage.setItem('ans', selVal);
                let pt = selVal.split('_')[3]
                setCount(Number(pt));
            }

            
            
        }
        function myCallback(){
            setSec((s)=> {
                console.log('aabb', s)
                if(s == 0) {//console.log('untar', s)
                    clearInterval(intval)
                }
                return s-1000
                
            })
            
        }

        React.useEffect(() => {
            if(sec == 0) {console.log('untar', sec)
                let ans = localStorage.getItem('ans');

                localStorage.clear();
                clearInterval(intval)
            }

        }, [sec])

        function startExam(){console.log("startExam")
        setIntval( setInterval(myCallback, 1000 ) )

        localStorage.setItem('ans', '');

        fetch('http://localhost:3000/exam/startexam')
        .then(response => response.json())
        .then(commits => {console.log(commits); 
            // setData(commits); console.log(data); 
            fetch('http://localhost:3000/exam/answers')
                .then(response => response.json())
                .then(hariult => {console.log(hariult); 
            
                let x = [];
                for (let i = 0; i < commits.length; i++) {
                    let qid = commits[i].id; 
                    let y = [];
                    for (let j = 0; j < hariult.length; j++) { console.log('qid', qid, hariult[j].Qid )
                        if (hariult[j].Qid == qid)
                            if (commits[i].isMulti == 'y'){
                                y.push(
                                    <div>
                                        <input type="checkbox"  value={commits[i].id + '_' +  commits[i].isMulti + '_' + hariult[j].id + '_' +  hariult[j].pt} className = "form-check-input" id={`flexCheckDefault${j}`} onChange={collectAnswer}/>  
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> {hariult[j].Atext} {'(' + hariult[j].pt +')'} </label>
                                    </div>
                                    )
                            }
                            else {
                                y.push(
                                    <div>
                                        <input type="radio" name={commits[i].Qtext} value={commits[i].id + '_' +  commits[i].isMulti + '_' + hariult[j].id + '_' +  hariult[j].pt}  className = "form-check-input" id={`flexCheckDefault${j}`} onChange={collectAnswer}/>  
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> {hariult[j].Atext} {'(' + hariult[j].pt +')'} </label>
                                    </div>
                                    
                                    )
                            }
                            
                    }
                    console.log('y=', y)

                    x.push(
                    <div key={i} className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Асуулт №{i+1}: {commits[i].Qtext}
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-start">
                            {y}
                        </div>
                        </div>
                    </div>
                    )
                }

                setRows(<div className="accordion" id="accordionExample">{x}</div>)
            
            });
        });


            
        }

        // function finishExam(){console.log("aa")

        // }

        // function getRandomInt(max) {
        //     return Math.floor(Math.random() * max);
        //   }

      //
 


    return(
        <div>
            <form className="mt-2"> {parseInt(sec/1000, 10)}
                <button type="button" className="btn btn-primary" onClick={()=>{startExam()}}> start exam  </button> onoo: <b>{count}</b>
                {rows}
            </form>
            
            
            
            
            

            
            
            
            </div>

    )

}

