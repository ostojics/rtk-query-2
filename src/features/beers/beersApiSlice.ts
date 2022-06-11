import {apiSlice} from 'features/api/apiSlice';
import {GetBeersDTO} from 'typescript/dto/GetBeersDTO';
import ApiData from 'typescript/interfaces/ApiData';
import {Beer} from 'typescript/models/Beer';

export const beersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBeers: builder.query<ApiData<Beer[]>, GetBeersDTO>({
      query: (body) => `/beers?page=${body.page}&per_page=${body.perPage}`,
      // eslint-disable-next-line no-console
      transformResponse: (response: ApiData<Beer[]>) => {
        const {included} = response;
        const filteredIncluded = included.filter((item) => item.type !== 'beer_styles');
        response.included = filteredIncluded;
        // eslint-disable-next-line no-console
        console.log(response);
        // eslint-disable-next-line no-console
        console.log(response.included);

        return response;
      },
      providesTags: () => [{type: 'Beer', id: 'LIST'}],
    }),
  }),
});

export const {useGetBeersQuery} = beersApiSlice;
