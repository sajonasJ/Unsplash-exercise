// store.ts
import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import { useDispatch } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const searchSlice = createSlice({
  name: 'search',
  initialState: { text: '', photos: [], error: null },
  reducers: {
    updateSearchText: (state, action) => { state.text = action.payload; },
    photosFetchSucceeded: (state, action) => { state.photos = action.payload; },
    photosFetchFailed: (state, action) => { state.error = action.payload; },
  },
});

export const { updateSearchText, photosFetchSucceeded, photosFetchFailed } = searchSlice.actions;

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;