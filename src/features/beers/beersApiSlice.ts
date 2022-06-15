import {TagDescription} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {apiSlice} from 'features/api/apiSlice';
import {CreateBeerDTO} from 'typescript/dto/CreateBeerDTO';
import {GetBeersDTO} from 'typescript/dto/GetBeersDTO';
import ApiData from 'typescript/interfaces/ApiData';
import {Beer} from 'typescript/models/Beer';

export const beersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBeers: builder.query<ApiData<Beer[]>, GetBeersDTO>({
      query: (dto) => `/beers?page=${dto.page}&per_page=${dto.perPage}&filter[query_array]=${dto.name || ''}`,
      // eslint-disable-next-line no-console
      transformResponse: (response: ApiData<Beer[]>) => {
        const {included} = response;
        const filteredIncluded = included.filter((item) => item.type !== 'beer_styles');
        response.included = filteredIncluded;
        // eslint-disable-next-line no-console
        console.log('response', response);
        // eslint-disable-next-line no-console
        console.log('included', response.included);

        return response;
      },
      providesTags: (result) => {
        const tagArray: TagDescription<'Beer'>[] = [{type: 'Beer', id: 'LIST'}];

        if (result) {
          const beersTags: TagDescription<'Beer'>[] = result.data.map((beer) => ({type: 'Beer', id: beer.id}));
          return tagArray.concat(beersTags);
        }

        return tagArray;
      },
      keepUnusedDataFor: 0,
    }),
    addBeer: builder.mutation({
      query: (dto: CreateBeerDTO) => ({
        url: '/beers',
        method: 'POST',
        body: {beer: dto},
      }),
    }),
  }),
});

export const {useGetBeersQuery, useAddBeerMutation} = beersApiSlice;
