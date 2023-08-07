import { createSlice } from "@reduxjs/toolkit";

const initialState ={

    students :{}
}

export const StudentSlice = createSlice(
    {
        name: "Student",
        initialState,
        reducers :
        {
            allotStudent(state, action)
            {
                console.log( "student state" , action.payload)
                console.log("Student Slice")
                let student = action.payload
                state.students={
                student,
               }
            }
        }
    }
);

export const { allotStudent } = StudentSlice.actions;

export default StudentSlice.reducer;