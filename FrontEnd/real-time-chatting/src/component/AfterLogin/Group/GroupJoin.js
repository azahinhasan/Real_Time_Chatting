import React, {  useState,useEffect, useRef } from 'react';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';
//npm i react-scroll-to-bottom
import Classes from '../AfterLogin.css';
import * as action from '../../../store/actions/index';
import {useHistory} from 'react-router-dom';
import axios from '../../../hoc/auxx';

import { connect } from 'react-redux';
import NavBar from '../navBar';

const GroupJoin=(props)=> {

   const [groupKey,setGroupKey]=useState('');
   const [userID,setUserID]=useState(localStorage.getItem('UserID'));
   const [msg, setMsg]=useState('');

   const sendGroupReq=()=>{
      axios.post('/groups/list/'+userID+'/'+groupKey)
         .then(r=>{
            setMsg(r.data);
         })
   }

   return (
      <div className={Classes.App}>
         <h3>Join Group</h3>
            <br/>
            <input onChange={e=>setGroupKey(e.target.value)} placeholder="Enter Group Key"/>
            <br/>
            <p>{props.friendRequestMsg}</p>
            <br/>
            {msg}
            <br/>
            <button onClick={()=>sendGroupReq()}>SEND</button>
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
export default  connect(mapStateToProps,mapDispatchToProps)(GroupJoin); 








