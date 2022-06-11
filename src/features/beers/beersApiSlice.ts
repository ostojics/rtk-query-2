import {apiSlice} from 'features/api/apiSlice';
import {GetBeersDTO} from 'typescript/dto/GetBeersDTO';
import ApiData from 'typescript/interfaces/ApiData';
import {Beer} from 'typescript/models/Beer';

export const beersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBeers: builder.query<ApiData<Beer[]>, GetBeersDTO>({
      query: (body) => `/beers?page=${body.page}&per_page=${body.perPage}&filter[query_array]=${body.name || ''}`,
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
      // providesTags: (result) => {
      //   const tagArray: TagDescription<'Beer'>[] = [{type: 'Beer', id: 'LIST'}];

      //   if (result) {
      //     const beersTags: TagDescription<'Beer'>[] = result.data.map((beer) => ({type: 'Beer', id: beer.id}));
      //     return tagArray.concat(beersTags);
      //   }

      //   return tagArray;
      // },
      keepUnusedDataFor: 0, // research more
    }),
  }),
});

export const {useGetBeersQuery} = beersApiSlice;
