import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from '../types';
import { useSwipe } from '../hooks/useSwipe';

interface CardProps {
  user: User;
  onLike: () => void;
  onPass: () => void;
  onViewProfile: () => void;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ user, onLike, onPass, onViewProfile, style }) => {
  const { onDragEnd, x } = useSwipe(onLike, onPass, onViewProfile);

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto"
      style={{ x, ...style }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={onDragEnd}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative h-96 w-full">
        <Image
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">
          {user.name.first} {user.name.last}, {user.dob.age}
        </h2>
        <p className="text-gray-600">
          {user.location.city}, {user.location.country}
        </p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={onPass}
            className="px-4 py-2 bg-red-500 text-white rounded-full"
          >
            Skip
          </button>
          <button
            onClick={onViewProfile}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full"
          >
            View Profile
          </button>
          <button
            onClick={onLike}
            className="px-4 py-2 bg-green-500 text-white rounded-full"
          >
            Like
          </button>
        </div>
      </div>
    </motion.div>
  );
};
