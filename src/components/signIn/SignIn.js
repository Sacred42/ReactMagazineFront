import {Requst} from '../../ReqResFunction/request'

const SignIn = (props) => {
    console.log(props.match.url)
    return (
        <div>
            <input type="text" name="email" id="email"></input>
            <input type="password" name="password" id="password"></input>
            <button type="submit" id="pas" onClick={()=>Requst(props.match.url)}>SignIn</button>
            <input id="alert"></input>
            {/* <Alert/> */}
        </div>
        
    )
}

export default SignIn;