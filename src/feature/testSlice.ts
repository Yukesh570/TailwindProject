import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState ={
    test:[
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

        addTest:()=>{
            return(
                console.log("test")
            )
        },
        remoceTest:()=>{

        },n
    }
})