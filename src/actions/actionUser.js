
const register = (email , password ) => async(dispatch)=>{
    dispatch({type : 'USER_REGISTER_REQUEST' });
    // const token = localStorage.getItem('access_token');
    // console.log(token);
    // const config = (token == null) ? {'Content-Type': 'application/json'} : {'Content-Type': 'application/json' , 'Authorization': `Bearer ${token}`};
    // console.log(config);
    const data = {email, password};
    await fetch('http://localhost:5000/signin' , {
        method : 'POST',
        mode: 'cors',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(data)
    })
    .then(res=> res.json())
    .then((data)=>{localStorage.setItem('id_token', data._id)
  localStorage.setItem('access_token' , data.token)}, dispatch({type : 'USER_REGISTER_SUCCESS' , payload : data.email}))
  // .then((data)=>dispatch({type : 'USER_REGISTER_SUCCESS' , payload : data.email}))
  .catch((error)=>dispatch({type : 'USER_REGISTER_ERROR' , payload : error}))
}

const checkToken = () => async(dispatch)=>{
  const token = localStorage.getItem('access_token');
  
    await fetch ('http://localhost:5000/signin' , {
      method : 'GET',
      mode: 'cors',
      headers : {'Content-Type': 'application/json' , 'Authorization': `Bearer ${token}`}
  
    })
    .then(response=> response.ok == true ? console.log(response) :  Promise.reject())
    .then(type=>({type}))
    .then(({type})=>{
      console.log('succes');
    })
    .catch(()=> dispatch({type : 'USER_REGISTER_SUCCESS' , payload : null}));
    
}

export {register , checkToken};