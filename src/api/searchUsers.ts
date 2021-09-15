import qs from 'query-string';
import {api, IGithubApiError} from './baseApi';
import { IUser } from './dto/githubUser';

export type IUserSearchQuery = {
  username: string;
  limit: number;
  offsetPage?: number;
};

export type IUsersResponse = {
  incomplete_results: boolean;
  items: IUser[];
};

export const githubSearchUsersApi = api.injectEndpoints({
  endpoints: builder => ({
    searchUsersByName: builder.query<IUser[], IUserSearchQuery>({
      query: ({ username, limit }: IUserSearchQuery) => {
        const query = qs.stringify({ q: username, per_page: limit });
        return `/search/users?${query}`;
      },
      transformResponse: response => (response as IUsersResponse)?.items ?? [],
    }),
  }),
  overrideExisting: false,
});

export const useSearchUserByNameQuery = githubSearchUsersApi.endpoints.searchUsersByName.useQuery;
export const useSearchUserByNameLazyQuery = githubSearchUsersApi.endpoints.searchUsersByName.useLazyQuery;
