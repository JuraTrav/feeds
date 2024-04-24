import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ActivityFeedDescrProps } from '../types/activity-feed';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Feeds'],
  endpoints: (builder) => ({
    getFeeds: builder.query<ActivityFeedDescrProps[], void>({
      query: () => 'feeds?_sort=-timestamp',
      providesTags: ['Feeds'],
    }),
    postFeed: builder.mutation({
      query: (body) => ({
        url: 'feeds',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Feeds'],
    }),
    deleteFeed: builder.mutation<{ success: boolean; id: string }, string | undefined>({
      query: (id) => ({
        url: `feeds/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Feeds'],
    }),
  }),
});

export const { useGetFeedsQuery, usePostFeedMutation, useDeleteFeedMutation } = apiSlice;
