import { useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard'

const UserList = () => {
  const {users} = useSelector((state) => state.bucket);
  return (
    <>
    <main className = "userWrapper container">
      {users.map((user) => (
        <UserCard
        key = {user.id}
        userName = {user.name}
        userAge = {user.age}
        userId = {user.id}
        />
      ))}
    </main>
    </>
  );
}

export default UserList;
