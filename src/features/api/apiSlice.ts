import {Routes} from 'constants/routes';

import {BaseQueryApi} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {push} from 'connected-react-router';
import {setServerErrorAC} from 'features/app/appSlice';

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

const baseQueryWithLogout = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  const result = await baseQuery(args, api, extraOptions);
  const {error} = result;
  // eslint-disable-next-line no-console
  console.log('error', error);

  if (error?.status === 401) {
    localStorage.clear();
    api.dispatch(push(Routes.LOGIN));
    api.dispatch(setServerErrorAC('Unauthorized'));
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Beer'],
  baseQuery: baseQueryWithLogout,
  endpoints: () => ({}),
});
