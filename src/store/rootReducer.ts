import { githubSearchUsersApi } from '../api/searchUsers';
import { githubUserReposApi } from '../api/userRepos';

const rootReducer = {
  [githubSearchUsersApi.reducerPath]: githubSearchUsersApi.reducer,
  [githubUserReposApi.reducerPath]: githubUserReposApi.reducer,
};

export default rootReducer;
