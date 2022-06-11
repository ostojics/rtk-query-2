import {apiSlice} from 'features/api/apiSlice';
import {LoginDTO} from 'typescript/dto/LoginDTO';
import {User} from 'typescript/models/User';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: LoginDTO) => ({
        url: '/users/sign_in',
        method: 'POST',
        body: {user: body},
      }),
      transformResponse: (response: User, meta) => ({
        user: response,
        token: meta?.response?.headers.get('authorization'),
      }),
    }),
  }),
});

export const {useSignInMutation} = authApiSlice;
