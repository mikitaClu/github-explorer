import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import RepositoryCard from '../layouts/RepositoryCard';
import { IGithubUserRepositoryDTO } from '../api/dto/githubUserRepository';

type Props = {
  repositories?: IGithubUserRepositoryDTO[];
  isPresent: boolean;
};

const variants = {
  closed: { opacity: 0, height: '0', transition: { duration: 0.35 }, transitionEnd: { display: 'none' } },
  open: { opacity: 1, height: '100%', display: 'block' },
};

export default function UserRepositories({ isPresent, repositories }: Props): React.ReactElement {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isPresent && repositories?.length ? 'open' : 'closed');
  }, [isPresent, repositories]);

  return (
    <motion.div variants={variants} animate={controls}>
      {repositories?.map((item, i) => (
        <RepositoryCard shouldAnimate={isPresent} key={item.id} id={i} userRepository={item} />
      ))}
    </motion.div>
  );
}
