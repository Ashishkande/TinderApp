"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from '../types';

interface ProfileModalProps {
  user: User;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ user, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-64">
          <Image
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-2 text-2xl font-bold">
            {user.name.first} {user.name.last}, {user.dob.age}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>
                {user.location.city}, {user.location.country}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>{user.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>{user.phone}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full py-2 mt-6 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
