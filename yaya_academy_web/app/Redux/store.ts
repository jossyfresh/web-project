import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeReducer from './Slice/theme-slice'
import logged_in from './Slice/loggedIn-slice';
import test  from './Slice/testSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


// combining the redusers into one so i could use type safety enywhere else
export const rootReducer = combineReducers({
    themeReducer,
    logged_in,
    // test
});


export const store = configureStore({
    reducer: rootReducer
});


// adding types for typescirpt
type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch