import { bgcolor } from "./actiontype";

const initialState = {
    color:'black'
}
export const mainReducer =(state=initialState,action)=>{
    switch(action.type){
        case bgcolor: 
        return{
            color:'#' + Math.random().toString(16).slice(2,8)
        } 
      
       
        default :
        return state;

    }

}