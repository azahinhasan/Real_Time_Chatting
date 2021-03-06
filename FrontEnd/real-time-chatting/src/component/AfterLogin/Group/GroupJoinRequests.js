import React, {  useState,useEffect, useRef } from 'react';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';
//npm i react-scroll-to-bottom
import Classes from '../AfterLogin.css';
import GroupClasses from './Group.css';
import * as action from '../../../store/actions/index';
import {useHistory} from 'react-router-dom';
import axios from '../../../hoc/auxx';


import { connect } from 'react-redux';
import NavBar from '../navBar';

const GroupJoinRequests=(props)=> {

   const [reqs,setReqs]=useState([]);
   const [userID,setUserID]=useState(localStorage.getItem('UserID'));
   const [msg, setMsg]=useState('');

   useEffect(() => {
      loadReq();
   }, []);

   useEffect(() => {
      loadReq();
   }, [reqs]);

   const loadReq=()=>{
      axios.get('/groups/joinrequest/'+props.groupKey)
         .then(r=>{
            
            setReqs(r.data);
            //console.log(r.data,' loadReq');
         })
   }

   const reqAction=(senderID,action)=>{
      console.log('/groups/joinrequest/action/'+props.groupKey+'/'+props.adminID+'/'+senderID+'/'+action)
      axios.post('/groups/joinrequest/action/'+props.groupKey+'/'+props.adminID+'/'+senderID+'/'+action)
         .then(r=>{
            //console.log(r.data,' req');
            setReqs(r.data);
         })
      
   }

   return (
      <div className={Classes.App} style={{textAlign:'center'}}>
            <h3 >All Join Requests</h3>
            
         {reqs != ''? 
            <table style={{width:'100%'}}>
               <ScrollToBottom className={Classes.allLoginActivity}>
                  {reqs.map(data=>{
                        return(
                           <div key={data.ID} style={{border:'2px black solid',marginTop:'5px'}}>
                              <tr>
                                 <td style={{width:'65%',borderRight:'2px black solid',textAlign:'center'}}> <span>{data.UserInfo.Name}</span></td>
                                 <td>
                                    <button className={Classes.greenBtn} onClick={()=>reqAction(data.UserID,'accept')}>ACCEPT</button>
                                    <button className={Classes.redBtn} onClick={()=>reqAction(data.UserID,'reject')}>REJECT</button>
                                 </td>
                              </tr>
                           </div>
                        )
                  })}
               </ScrollToBottom>
            </table>
         :
         <h4>No Group Join Request!</h4>}
      </div>
   
   );

}

const mapStateToProps=state=>{
   return{

   }

}

const mapDispatchToProps=dispatch=>{
   return{

   }
}
export default  connect(mapStateToProps,mapDispatchToProps)(GroupJoinRequests); 








