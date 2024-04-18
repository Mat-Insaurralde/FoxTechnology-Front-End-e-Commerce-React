import  { createSlice } from '@reduxjs/toolkit';


const initialState = {
  theme:'ligth',
  value:false
}


export const themeSlice = createSlice({

name : 'theme',

initialState,

reducers:{

changeTheme:(state)=>{

state.value = !state.value; 
state.theme = state.value ? 'dark' : 'ligth';



}
,


}
});


export const { changeTheme} = themeSlice.actions;

export default themeSlice.reducer;