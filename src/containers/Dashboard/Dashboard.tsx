import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSearchUserByNameLazyQuery } from '../../api/searchUsers';
import SearchBar from '../../layouts/SearchBar';
import UserCard from '../../dataViews/UserCard';
import Spinner from '../../layouts/Spinner';
import EmptyResultContainer from '../../layouts/EmptyResultContainer';

export default function Dashboard(): React.ReactElement {
  const [getUsers, { data, isLoading }] = useSearchUserByNameLazyQuery({
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const history = useHistory();

  const handleProfileNavigate = (id: number) => history.push(`/profile/${id}`);

  const handleSearchSubmit = ({ searchValue }: { searchValue: string }) => {
    // Pagination controls, for now hardcoded, for future purposes of the infinite scroll it's a nice to have thing
    getUsers({ username: searchValue, limit: 10, offsetPage: 1 });
  };

  const renderResults = (): React.ReactElement[] | React.ReactElement | null => {
    if (!isLoading) {
      if (data && data.length) {
        return data.map(item => <UserCard onProfilePictureClick={handleProfileNavigate} user={item} key={item.id} />);
      }
      return <EmptyResultContainer label="There are no results, yet. Try to search for someone" />;
    }
    return null;
  };

  return (
    <div className="bg-gray overflow-x-hidden md:overflow-x-auto">
      <SearchBar onFormSubmit={handleSearchSubmit} />
      <div className="container pt-32 mx-auto px-4 md:px-28 md:px-32 lg:px-54 xl:px-96">
        {isLoading && (
          <div className="flex w-full h-full justify-center items-center">
            <Spinner />
          </div>
        )}
        {renderResults()}
      </div>
    </div>
  );
}
