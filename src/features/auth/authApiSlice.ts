import {apiSlice} from 'features/api/apiSlice';
import {LoginDTO} from 'typescript/dto/LoginDTO';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: LoginDTO) => ({
        url: '/users/sign_in',
        method: 'POST',
        body: {user: body},
      }),
    }),
  }),
});

export const {useSignInMutation} = authApiSlice;
