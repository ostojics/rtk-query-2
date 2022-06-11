import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem('token')!);

    if (token) {
      headers.set('Authorization', token);
    }

    return headers;
  },
});

// const baseQueryWithLogout = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
//   const result = await baseQuery(args, api, extraOptions);
//   // eslint-disable-next-line no-console
//   console.log('status', result.error?.status);

//   if (result.error?.status === 401) {
//     // eslint-disable-next-line no-console
//     console.log('token expired');

//     localStorage.clear();
//     api.dispatch(push(Routes.LOGIN));
//   }

//   return result;
// };

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Beer'],
  baseQuery,
  endpoints: () => ({}),
});
