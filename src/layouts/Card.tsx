import React from 'react';
import { motion } from 'framer-motion';
import Loader from 'react-loader-spinner';
import { FaArrowDown } from 'react-icons/fa';
import Spinner from './Spinner';

type Props = {
  children: string | React.ReactElement;
  isCardExpanded: boolean;
  onCardExpandToggle: () => void;
  hasSpinner?: boolean;
};

const variants = {
  open: {
    height: '100%',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  closed: { height: 'auto' },
};

export default function Card({ children, isCardExpanded, onCardExpandToggle, hasSpinner }: Props): React.ReactElement {
  return (
    <motion.div
      animate={isCardExpanded ? 'open' : 'closed'}
      variants={variants}
      className="bg-white shadow-md rounded mb-4 hover:shadow-lg duration-200 cursor-pointer relative"
    >
      <div className="flex">
        <div className="flex flex-1">{children}</div>
        <div className="flex flex-initial pl-2 pr-2 md:pl-0 md:pr-4">
          {hasSpinner && (
            <div className="flex items-center pr-2">
              <Spinner/>
            </div>
          )}
          <button onClick={onCardExpandToggle} className={`duration-200 transform rotate-${isCardExpanded ? 180 : 0}`}>
            <FaArrowDown fontSize={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
