import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://109.1.1.67:5000/api' }),
  tagTypes: ['Product'],
  endpoints: builder => ({
    products: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
    product: builder.query({
      query: id => `/products/${id}`,
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation({
      query: product => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: product => ({
        url: `/products`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),

    deleteProduct: builder.mutation({
      query: id => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useProductsQuery,
  useProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
