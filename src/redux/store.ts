import { configureStore } from "@reduxjs/toolkit";
import type { Person } from "@/models";
import { favoritesSlice } from "./states/favorites";
import { peopleSlice } from "./states/people";

export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
