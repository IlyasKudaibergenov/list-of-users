import { useDispatch } from 'react-redux';
import snake from '../../snake.jpeg'
import { deleteUser, editUser } from '../../store/BucketSlice';

const UserCard = (props) => {
  const dispatch = useDispatch();
  console.log("props", props);
  return (
    <>
    <div className="userCard">
        <img src = {snake} alt = "logo" style ={{width: 80}} />
        <p>Name: {props.userName}</p>
        <p>Age: {props.userAge}</p>
        <button onClick={() => dispatch(deleteUser(props.userId))}>
          Delete user
        </button>
    </div>
    </>
    );
}

export default UserCard;  