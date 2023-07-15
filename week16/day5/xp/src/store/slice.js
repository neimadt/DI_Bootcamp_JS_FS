import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    snapshots: [],
    query: '',
    gettingSnapshots: false
};

const slice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        putSnapshots: (state, action) => {

            const { payload: { snapshots, clear } } = action;

            if (clear) {

                state.snapshots.length = 0;
            }

            state.snapshots.push(...snapshots);
        },
        setQuery: (state, action) => {

            state.query = action.payload;
        },
        startFetchSnapshots: (state) => {

            state.gettingSnapshots = true;
        },
        stopFetchSnapshots: (state) => {

            state.gettingSnapshots = false;
        },
    },
});

export const {
    reducer,
    actions: {
        putSnapshots,
        setQuery,
        startFetchSnapshots,
        stopFetchSnapshots
    }
} = slice;