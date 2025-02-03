import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from './counterSlice';
import todoSliceReducer from './todoSlice';
import userSliceReducer from './usersSlice'

const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        todo: todoSliceReducer,
        users: userSliceReducer,
    }
});

export default store;