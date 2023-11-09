import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './Slice/theme-slice'
import test from './Slice/testSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// creating redux store and adding to it our themeReducer
export const store = configureStore({
    reducer: {
        themeReducer,
        test
    }
});

// adding types for typescirpt 
// type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;