import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name : 'map',
    initialState : {
        selectedCity : null,
        selectedYear : null
    },
    reducers: {
        setCity : (state, action) => {
            state.selectedCity = action.payload
        },
        unsetCity : (state) => {
            state.selectedCity = null
        }
    }
})

export const { setCity, unsetCity } = mapSlice.actions;

export default mapSlice.reducer;
export const selectSelectedCity = (state) => state.map.selectedCity;
export const selectSelectedYear = (state) => state.map.selectSelectedYear;