"use client"
import { AnimatePresence } from 'framer-motion';
import { Card } from './Card';
import { User } from '../types';
import { useAppDispatch } from '../store/hooks';
import { likeUser, passUser } from '../store/slices/userSlice';

interface CardStackProps {
  users: User[];
  currentIndex: number;
  onViewProfile: (userId: number) => void;
}

export const CardStack: React.FC<CardStackProps> = ({ users, currentIndex, onViewProfile }) => {
  const dispatch = useAppDispatch();

  const handleLike = (user: User) => {
    dispatch(likeUser(user));
  };

  const handlePass = (userId: number) => {
    dispatch(passUser(userId));
  };

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px]">
      <AnimatePresence>
        {users.length > 0 && currentIndex < users.length && (
          <Card
            key={users[currentIndex].id}
            user={users[currentIndex]}
            onLike={() => handleLike(users[currentIndex])}
            onPass={() => handlePass(users[currentIndex].id)}
            onViewProfile={() => onViewProfile(users[currentIndex].id)}
          />
        )}
      </AnimatePresence>
      {currentIndex >= users.length && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl text-gray-500">No more profiles to show</p>
        </div>
      )}
    </div>
  );
};
