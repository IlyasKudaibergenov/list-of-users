import { configureStore } from '@reduxjs/toolkit'
import BucketReducer from "./BucketSlice"

export const store = configureStore({
    reducer: {
        bucket: BucketReducer,
    },
})