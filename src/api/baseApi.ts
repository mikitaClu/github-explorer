import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export type IGithubApiError = {
  data: { message: string };
};

export const api = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
    headers: { accept: 'application/vnd.github.v3+json' },
  }),
  endpoints: () => ({}),
});
