import React from 'react';
import { motion } from 'framer-motion';
import { IGithubUserRepositoryDTO } from '../api/dto/githubUserRepository';
import { FaStar } from 'react-icons/fa';

type Props = {
  id: number;
  userRepository: IGithubUserRepositoryDTO;
  shouldAnimate: boolean;
};

const animationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
};

export default function RepositoryCard({ id, userRepository }: Props): React.ReactElement {
  return (
    <motion.div
      className="ml-8 md:ml-24 md:mr-4 mb-4 p-4 rounded-lg bg-gray-200 flex"
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      custom={id}
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          <h4 className="text-sm md:text-xl font-bold">{userRepository.name}</h4>
          <div className="flex items-center ml-4">
            <FaStar />
            <span className="ml-2">{userRepository.stargazers_count}</span>
          </div>
        </div>
        <div className="flex">
          <p className="text-xs md:text-sm">{userRepository.description?.slice(0, 45)}</p>
        </div>
      </div>
    </motion.div>
  );
}
