import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: { file: File[], Product: {}, search: { type: string, range: Number, location: string, item: string }, Result: [] } = {
    Product: {},
    search: { type: "Rent", range: 50000, location: "jaipur", item: "Flat" },
    Result: [], file: []
}


export const Edits = createSlice({
    name: "Edits",
    initialState,
    reducers: {
        AddEdits: (state, actions: PayloadAction<lol>) => {
            state.Product = actions.payload
        },
        type: (state, actions: PayloadAction<string>) => {
            state.search.type = actions.payload
        },
        range: (state, actions: PayloadAction<number>) => {
            state.search.range = actions.payload
        }, location: (state, actions: PayloadAction<string>) => {
            state.search.location = actions.payload
        },
        item: (state, actions: PayloadAction<string>) => {
            state.search.item = actions.payload
        },
        Resu: (state, actions: PayloadAction<[]>) => {
            state.Result = actions.payload
        },
        img: (state, actions: PayloadAction<{ index: number; file: File }>) => {
            
            state.file[actions.payload.index]=actions.payload.file
        },
        empty: (state, actions: PayloadAction<[]>)=>{
state.file=actions.payload
        }
    }
})

export const { AddEdits, type, location, range,empty, Resu, item,img } = Edits.actions;
export default Edits.reducer;