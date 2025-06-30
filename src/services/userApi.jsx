import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://109.1.1.67:5000/api' }),
  tagTypes: ['User'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: user => ({
        url: '/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useAddUserMutation, useLoginUserMutation } = userApi;
