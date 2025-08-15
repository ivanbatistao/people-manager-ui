import { createSlice } from "@reduxjs/toolkit";
import type { Person } from "@/models";
import { LocalStorageTypes } from "@/models/localStorage";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { people } from "@/data/people";

const initialState: Person[] =  people;

export const peopleSlice = createSlice({
    name: "people",
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? getLocalStorage(LocalStorageTypes.PEOPLE) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state);
            return action.payload;
        },
    },
});

export const { addPeople } = peopleSlice.actions;