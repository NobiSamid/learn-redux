import {users_request, get_users_success, get_users_failed } from '../types';


const initialState = {
    loading: false,
    users:[],
    error:''
}

export default function(state = initialState, action){
     switch(action.type){
         case users_request:
             return{
                 ...state,
                 loading: true
             }
         case get_users_success:
             return{
                 ...state,
                 loading: false,
                 users:action.payLoad
             }
         case get_users_failed:
             return{
                 ...state,
                 loading: false,
                 users:[],
                 error: action.payLoad
             }
             default:
                 return state;
     }
}