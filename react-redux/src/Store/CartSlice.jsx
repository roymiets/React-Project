import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state ,action){
          state.push(action.payload)
        },
        remove (state,action){
          return state.filter(item=>item.id!==action.payload);
        }
    }
});
export const{add}=CartSlice.actions;
export const{remove}=CartSlice.actions;
export default CartSlice.reducer;