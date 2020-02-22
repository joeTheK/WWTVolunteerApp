const initState = {
    authError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
        
      case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state;
  
      default:
        return state
    }
  };
  
  export default authReducer;