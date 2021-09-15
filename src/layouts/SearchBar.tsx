import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  onFormSubmit: (searchValue: any) => void;
};

export default function SearchBar({ onFormSubmit }: Props): React.ReactElement {
  const { handleSubmit, register } = useForm();
  return (
    <div className="bg-gray-100 h-24 mb-8 flex flex-col items-center justify-center fixed w-full z-10">
      <div className="container mx-auto px-8 sm:px-32 md:px-40 lg:px-64 xl:px-96 w-full">
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex items-center justify-center">
          <input
            {...register('searchValue')}
            placeholder="Search for Github username"
            className="w-full px-4 py-2 rounded-md shadow"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:text-blue-600 hover:bg-white duration-300 shadow ml-2"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
