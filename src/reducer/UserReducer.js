const UserRegisterReducer = (state = {} , action) =>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':
          return {loading : true };
        case 'USER_REGISTER_SUCCESS':
          return {loading : false , userInfo : action.payload};
        case 'USER_REGISTER_ERROR':
            return{loading : false , error : action.payload};
        default : return state;
    }
}

export {UserRegisterReducer};