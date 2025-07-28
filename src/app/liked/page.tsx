'use client';

import { useAppSelector } from '../../store/hooks';
import { LikedUserCard } from '../../components/LikedUserCard';

export default function LikedPage() {
  const { likedUsers } = useAppSelector((state) => state.user);

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">Liked Users</h1>
      {likedUsers.length === 0 ? (
        <p className="text-gray-500">You haven  not liked any users yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {likedUsers.map((user) => (
            <LikedUserCard key={user.login.uuid} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
