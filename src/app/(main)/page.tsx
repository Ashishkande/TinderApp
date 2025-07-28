'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUsers } from '../../store/slices/userSlice';
import { fetchUsers } from '../../lib/api';
import { CardStack } from '../../components/CardStack';
import { ProfileModal } from '../../components/ProfileModal';

export default function Home() {
  const dispatch = useAppDispatch();
  const { users, currentIndex } = useAppSelector((state) => state.user);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers(10);
      dispatch(setUsers(fetchedUsers));
    };
    loadUsers();
  }, [dispatch]);

  const handleViewProfile = (userId: number) => {
    setSelectedUser(userId);
    setIsModalOpen(true);
  };

  const selectedUserData = users.find((user) => user.id === selectedUser);

  return (
    <div className="py-8">
      <CardStack
        users={users}
        currentIndex={currentIndex}
        onViewProfile={handleViewProfile}
      />
      {isModalOpen && selectedUserData && (
        <ProfileModal
          user={selectedUserData}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
