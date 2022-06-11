import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {IncludedBrewery} from 'typescript/models/IncludedBrewery';
import {RootState} from 'typescript/types/RootState';

import {beersApiSlice} from './beersApiSlice';

const includedBreweriesAdapter = createEntityAdapter<IncludedBrewery>({
  selectId: (brewery) => brewery.id,
});

const beersSlice = createSlice({
  name: 'beers',
  initialState: includedBreweriesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(beersApiSlice.endpoints.getBeers.matchFulfilled, (state, {payload}) => {
      includedBreweriesAdapter.setAll(state, payload.included);
    });
  },
});

export const includedBreweriesSelector = includedBreweriesAdapter.getSelectors((state: RootState) => state.beers);

export default beersSlice;
