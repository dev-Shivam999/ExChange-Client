import { configureStore } from "@reduxjs/toolkit";
import AddProfile from './Edit'

export const store=configureStore({
    reducer:{AddProfile}
})