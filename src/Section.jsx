import React, { useEffect, useState } from 'react'


const Section = () => {
    const[task,settask]=useState("");
    const[time,settime]=useState("");
    const [tasks,settasks]=useState(JSON.parse(localStorage.getItem("Tasks")));
    // const [finished,setfinished]=useState(false);
    const[page,setpage]=useState("all");
    const[total,settotal]=useState(JSON.parse(localStorage.getItem("Tasks")).length)
    
    
       
    const finishstate = JSON.parse(localStorage.getItem("finishstate"));

    const[finishedtasks,setfinishedtasks]=useState(finishstate.filter(val=>val==="green").length);
    const[Unfinishedtasks,setUnfinishedtasks]=useState(finishstate.filter(val=>val==="yellow").length);

    // let fnum= finishstate.filter(val=>val==="green").length
   
       
  //  const page = "finishedtasks"


  





    function storeandshow(){
       
        if(task==="") return alert("please put some task");

        const storage = JSON.parse(localStorage.getItem("Tasks"));
        // const finishstate = JSON.parse(localStorage.getItem("finishstate"));
        storage.push(task);
        settasks(storage);
        localStorage.setItem("Tasks",JSON.stringify(storage));

        finishstate.push("yellow");
        localStorage.setItem("finishstate",JSON.stringify(finishstate));

        setUnfinishedtasks(finishstate.filter(val=>val==="yellow").length);
        settotal(finishstate.length);
        
        settask("")

    }

    function clear(){
        localStorage.clear();
        localStorage.setItem("Tasks",JSON.stringify([]));
        localStorage.setItem("finishstate",JSON.stringify([]));
        const storage = JSON.parse(localStorage.getItem("Tasks"));
        settasks(storage);
        const finishstatesato = JSON.parse(localStorage.getItem("finishstate"));
        setUnfinishedtasks(0);
        setfinishedtasks(0);
        settotal(0);
    }


    function finished(e){

        if(confirm("if you dont finished it please take sometime and cancel it  otherwise press ok")){

       
             e.target.parentElement.style.backgroundColor="green";
            //   const finishstate = JSON.parse(localStorage.getItem("finishstate"));
            const index = Number(e.target.nextElementSibling.innerText)
            //   console.log(typeof(index))
            finishstate[index]="green";
            localStorage.setItem("finishstate",JSON.stringify(finishstate));
            e.target.style.display="none";
            alert("nice work buddy");
            setfinishedtasks(finishstate.filter(val=>val==="green").length);
            setUnfinishedtasks(finishstate.filter(val=>val==="yellow").length);
            settotal(finishstate.length);
                
        }

            else return alert("good thing buddy dont fool youself");
       
    }


    function filterby(color){
      let indexarr = [];
      finishstate.forEach((element,ind) => {
        if(element===color)indexarr.push(ind);
      });
      let filtered = [];
      const storaged = JSON.parse(localStorage.getItem("Tasks")) 
      for(let i of indexarr){
        filtered.push(storaged[i])
      }
       
      // console.log(filtered)

      settasks(filtered);
    }

    
  return (
    <div className='section'>
        <div className="screen">
          <div className="info">
            <p>totaltasks : {total}</p>
            <p>finishedtasks :{finishedtasks} </p>
            <p>unfinishedtasks : {Unfinishedtasks}</p>
          </div>
          {tasks.map((task,ind)=>{

            if(page==="all"){
            return(
                <div className="cards" key={ind}  style={{backgroundColor:finishstate[ind]}}>
                    <h1>{task}</h1>
                    <button className='btn btn-success' onClick={finished} style={{display:finishstate[ind]==="green"?"none":"inline-block"}}>finished</button>
                    <span style={{display:"none"}}>{ind}</span>
                </div>
            )}

            else if(page==="green"){
              return(
                <div className="cards" key={ind}  style={{backgroundColor:"green"}}>
                    <h1>{task}</h1>
                    <button className='btn btn-success' onClick={finished} style={{display:"none"}}>finished</button>
                    <span style={{display:"none"}}>{ind}</span>
                </div>
                
              )
            }
            else if(page==="yellow"){
              return(
                
                <div className="cards" key={ind}  style={{backgroundColor:"yellow"}}>
                    <h1>{task}</h1>
                    <button className='btn btn-success' onClick={finished} style={{display:"none"}}>finished</button>
                    <span style={{display:"none"}}>{ind}</span>
                </div>
                
              )
            }
          })}
        </div>
        <div className="input">
                <input type='text'  onChange={(e)=>{settask(e.target.value)}} value={task}/>
                <input type='date'/>
                <button className='btn btn-primary ' onClick={storeandshow}>add task</button>
                <button className='btn btn-danger' onClick={clear}>clear</button>
                <button className='btn btn-info ' onClick={()=>{filterby("green");setpage("green")}}>Finished Tasks</button>
                <button className='btn btn-info ' onClick={()=>{filterby("yellow");setpage("yellow")}}>UnFinished Tasks</button>
                <button className='btn btn-warning ' onClick={()=>{settasks(JSON.parse(localStorage.getItem("Tasks")));setpage("all")}}>back</button>
        </div>
    </div>
  )
}

export default Section



