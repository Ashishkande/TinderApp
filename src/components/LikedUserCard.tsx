import Image from 'next/image';
import Link from 'next/link';
import { User } from '../types';

interface LikedUserCardProps {
  user: User;
}

export const LikedUserCard: React.FC<LikedUserCardProps> = ({ user }) => {
  return (
    <Link href={`/profile/${user.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">
            {user.name.first} {user.name.last}
          </h3>
          <p className="text-gray-600">
            {user.location.city}, {user.dob.age}
          </p>
        </div>
      </div>
    </Link>
  );
};
