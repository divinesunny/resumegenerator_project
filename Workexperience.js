import React,{useContext, useState}  from "react";
import WorkExp from "./../../Component/workExp/WorkExp";
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';
import classes from './Workexp.css';
import Context from './../../Component/ContextApi/Context';

export default function Workexperience() {

   const [arr,updateArr]=useState(1);
   const [workExpArr,updateExp]=useState([]);
   let [stat,updateStatus]=useState(false);
   let contextData=useContext(Context)
   let temp;
   
   function increment(){
     updateArr(arr+1);
   }
   
   function execute(params,status){
      temp=status
     updateExp([...workExpArr,params])
   }
 
   function showData(context){
      context.workexp=[...workExpArr]
      updateStatus(true);
      console.log('work exp updated')
      console.log(contextData)
   }
   return (
      <Context.Consumer>
         {context =><div className={classes.WorkContainer}>
            <h1>Work Experience</h1>
            <p>make sure to save after flling details</p>

           <button onClick={increment} className={classes.button}>Add</button>
            {[...Array(arr)].map((_,index)=>{
            return <WorkExp parentCallBack={execute} key={index}></WorkExp>
            })}
            
      <button onClick={()=>showData(context)} className={classes.proceed}>{stat?'Updated':'Update To Resume'}</button>
      </div>}
      </Context.Consumer>
   )
}

