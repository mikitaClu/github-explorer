import React, { useEffect, useState } from 'react';
import Card from '../layouts/Card';
import UserRepositories from './UserRepositories';
import { IUser } from '../api/dto/githubUser';
import { useGetUserLazyRepos } from '../api/userRepos';

type Props = { user: IUser; onProfilePictureClick: (id: number) => void };

export default function UserCard({ user, onProfilePictureClick }: Props): React.ReactElement {
  const [isCardExpanded, handleCardStateChange] = useState(false);
  const [getUserRepos, { data: repositories, isLoading, error }] = useGetUserLazyRepos();

  useEffect(() => {
    if (isCardExpanded && user?.login) {
      getUserRepos({ username: user.login, direction: 'desc', page: 1, per_page: 10 });
    }
  }, [isCardExpanded, user?.login]);

  const handleCardToggle = () => handleCardStateChange(prev => !prev);

  return (
    <Card hasSpinner={isLoading} onCardExpandToggle={handleCardToggle} isCardExpanded={isCardExpanded}>
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="flex-initial flex items-center px-4">
            <button onClick={() => onProfilePictureClick(user.id)}>
              <img
                className="duration-200 hover:border-blue-600 border-transparent border-4 rounded-full w-20 h-20"
                src={user.avatar_url}
                alt="User avatar"
              />
            </button>
          </div>
          <div onClick={handleCardToggle} className="flex-1 p-4 md:p-8">
            <h4 className="font-bold text-lg">Username: {user.login}</h4>
            <span>User ID: {user.id}</span>
          </div>
        </div>
        <UserRepositories
          isPresent={isCardExpanded && !isLoading && Boolean(repositories)}
          repositories={repositories}
        />
      </div>
    </Card>
  );
}
