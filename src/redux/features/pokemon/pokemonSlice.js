import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const verPokemon = createAsyncThunk(
    "verPokemon",
    async (args, { rejectWithValue }) => {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=59"
        );
        
        try {

            const result = await response.json();
    
            return result.results;

        } catch(error) {
            return rejectWithValue(error);
        }

    }
);

export const verDetallesPokemon = createAsyncThunk(
    "verDetallesPokemon",
    async (data, { rejectWithValue }) => {
    
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${data}`
        );

        try {

            const result = await response.json();
           
            return result;

        } catch(error) {
            return rejectWithValue(error);
        }
    }
);

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemonData: [],
        loading: false,
        error: null,
        searchData: null,
        searchList: []
    },

    reducers: {
        searchResult : (state, action) => {
            state.searchList = action.payload;
        }
    },

    extraReducers : {
        //ver pokemon extraReducers
        [verPokemon.pending] : (state) => {
            state.loading = true;
        },
        [verPokemon.fulfilled] : (state, action) => {
            state.loading= false;
            state.pokemonData = action.payload;
        },
        [verPokemon.rejected] : (state) => {
            state.loading = false;
            state.error = state.payload; 
        },

        //ver detalles pokemon extraReducers
        [verDetallesPokemon.fulfilled] : (state, action) => {
            state.searchData = action.payload;
        },
        [verPokemon.rejected] : (state) => {
            state.error = state.payload; 
        }
    }

});

export default pokemonSlice.reducer;
export const {searchResult} = pokemonSlice.actions;