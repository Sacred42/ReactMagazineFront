import {Requst} from '../../ReqResFunction/request'

const SignUp = (props)=>{
    return(
        <div>
            <input type="text" name="email" id="email"/>
            <input type="password" name="password" id="password"/>
            <button type="submit" id="sub" onClick={()=>Requst(props.match.url)} >SignUp</button>
            <input id="alert"></input>
        </div>
    )
}

export default SignUp;