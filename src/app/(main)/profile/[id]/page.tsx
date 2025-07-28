'use client';

import { useParams } from 'next/navigation';
import { useAppSelector } from '../../../../store/hooks';
import { ProfileModal } from '../../../../components/ProfileModal';
import Link from 'next/link';

export default function ProfilePage() {
  const params = useParams();
  const userId = Number(params.id);
  const { users, likedUsers } = useAppSelector((state) => state.user);
  
  const user = [...users, ...likedUsers].find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500 mb-4">User not found</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <ProfileModal user={user} onClose={() => {}} />
      <div className="mt-4 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to swiping
        </Link>
      </div>
    </div>
  );
}
