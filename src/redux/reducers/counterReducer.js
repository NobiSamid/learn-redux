import {increase_value, decrease_value } from '../types';


const initialState = {
    count: 5
}

export default function counterReducer(state = initialState, action){
     switch(action.type){
         case increase_value:
             return{
                 ...state,
                 count: state.count + action.payLoad
             }
         case decrease_value:
             return{
                 ...state,
                 count:state.count - action.payLoad
             }
             default:
                 return state;
     }
}