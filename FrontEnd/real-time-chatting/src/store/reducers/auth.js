import * as actionTypes from '../actions/actionTypes';

const initialState={
   verifiedUser:false,
   error:'',
   loading:false
}


const reducer = ( state = initialState, action ) => {
   switch ( action.type ) {
      case actionTypes.AUTH_SUCCESS: 
      return {
         ...state,
         verifiedUser:action.verifiedUser,
      };

      case actionTypes.AUTH_FAILED: 
      return {
         ...state,
         verifiedUser:action.verifiedUser,
      };
      default:
         return state;
   }
};


export default reducer;