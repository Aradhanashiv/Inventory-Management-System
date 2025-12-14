import {createSlice} from '@reduxjs/toolkit'

const inventorySlice = createSlice({
        name : "inventory",

        initialState: {
            inventoryData: null,
            thresholdInventory:null
        },

        reducers: {
            setInventoryData: (state, action) => {
                state.inventoryData = action.payload
            },
            setThresholdInventory: (state, action)=>{
                state.thresholdInventory = action.payload
            }
        }
})

export const {setInventoryData, setThresholdInventory} = inventorySlice.actions

export default inventorySlice.reducer