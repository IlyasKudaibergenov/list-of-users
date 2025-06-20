import './App.css';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UserCard from './components/UserCard/UserCard'
import snake from './snake.jpeg'
import CreateUserForm from './components/CreateUserForm/CreateUserForm'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, addUser } from './store/BucketSlice';

function App() {
  const {users} = useSelector((state) => state.bucket);
  const dispatch = useDispatch();
  const createUser = (name, age) => {
    const newUser = {
      id: users.length,
      name: name,
      age: age,
    };
    dispatch(addUser(newUser));
};
  return (
    <>
      <Header />
      <CreateUserForm createUser = {createUser}/>
      <UserList/>
    </>
    );
}

export default App;
