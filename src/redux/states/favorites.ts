import { LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";
import type { Person } from "@/models";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? getLocalStorage(LocalStorageTypes.FAVORITES) : initialState,
    reducers: {
        addFavorite: (_, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, action.payload.map((person: Person) => ({ ...person, favorite: true })));
            return action.payload;
        },
        removeFavorite: (_, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
            return action.payload;
        }
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;