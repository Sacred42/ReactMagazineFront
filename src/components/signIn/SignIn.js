import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Requst} from '../../ReqResFunction/request';
import {register, checkToken} from '../../actions/actionUser';

const SignIn = (props) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const useRegister = useSelector(state => state.UserRegisterReducer);
    const {loading, error, userInfo} = useRegister;
    const dispatch = useDispatch();

    console.log(userInfo);
    useEffect(()=>{
        if(userInfo){
        dispatch(checkToken());
        }
        return ()=>{
        }
     }, [])
    

    const submitHandler = () => {
        
        dispatch(register( email, password));
      }

    return (
        <div>
            
             <div>{loading && <div>Loading...</div>}
             {error && <div>{error}</div>}
             {userInfo && <div>{userInfo}</div>}
             </div> 
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit" id="pas" onClick={submitHandler}>SignIn</button>
            <input id="alert"></input>
            {/* <Alert/> */}
            
        </div>
        
    )
}

export default SignIn;