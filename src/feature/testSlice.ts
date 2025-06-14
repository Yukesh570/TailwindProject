import {createSlice,nanoid} from "@reduxjs/toolkit";


const initialState ={
    tests:[
        {
            id:1,
            text:"hwllo"
        }
    ]
}


export const testSlice=createSlice({
    name:"test",
    initialState, 
    reducers:{

        addTest:(state, action)=>{
            const test={
                id: state.tests.length + 1,
                text: action.payload
            }
            state.tests.push(test)
        },
        removeTest:(state,action)=>{
            state.tests= state.tests.filter(test=>test.id !== action.payload)

            


        },
    }
})

export const {addTest,removeTest}=testSlice.actions
export default testSlice.reducer