import { createListenerMiddleware } from '@reduxjs/toolkit';
/*import { startLogin } from '../features/auth/authSlice';
import { getUserAuth } from '../features/auth/thunk';*/



export const listenerMiddleware = createListenerMiddleware();


/*
*
*   AUTH
*
*/

/*listenerMiddleware.startListening({
    actionCreator: startLogin,
    effect: async (action, listenerApi) => {
  
        listenerApi.dispatch(getUserAuth());
      
    }
})*/




export default listenerMiddleware;