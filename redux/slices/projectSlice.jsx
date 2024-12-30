import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const fetchProject = createAsyncThunk("projectSlice/fetchProject", async () => {

    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        });
        
        return response.data; // Return the data directly
      } catch (error) {
        console.error("Error fetching project:", error);
        throw error; // Reject the thunk with error
      }
})

const projectSlice = createSlice({
    initialState : [],
    name : "projectSlice",
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchProject.fulfilled , (state , action) => {
            console.log("projects",action.payload.data)
            return state = action.payload.data
        })
    }
})

const {} = projectSlice.actions
export default projectSlice.reducer