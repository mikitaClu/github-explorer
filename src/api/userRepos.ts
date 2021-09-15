import qs from 'query-string';
import { api } from './baseApi';
import { IGithubUserRepositoryDTO } from './dto/githubUserRepository';

export enum IUserRepoType {
  ALL = 'all',
  OWNER = 'owner',
  MEMBER = 'member',
}

type IUserReposParams = {
  username: string;
  direction: 'asc' | 'desc';
  per_page: number;
  page: number;
  type?: IUserRepoType;
};

export const githubUserReposApi = api.injectEndpoints({
  endpoints: builder => ({
    getUserRepos: builder.query<IGithubUserRepositoryDTO[], IUserReposParams>({
      query: ({ username, ...queryParams }: IUserReposParams) =>
        `/users/${username}/repos?${qs.stringify(queryParams)}`,
    }),
  }),
  overrideExisting: false,
});

export const useGetUserLazyRepos = githubUserReposApi.endpoints.getUserRepos.useLazyQuery;
export const useGetUserRepos = githubUserReposApi.endpoints.getUserRepos.useQuery;
