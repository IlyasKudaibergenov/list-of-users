import { useSelector } from 'react-redux';
import snake from '../../snake.jpeg'

const Header = () => {
  const { users } = useSelector((state) => state.bucket);
  return (
    <>
    <header className = "container">
      <img src ={snake} alt = "logo" style={{width: 150}} />
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact us</a>
        Кол-во user: {users.length}
      </nav>

      <button>login</button>
    </header>
    </>
    );
}

export default Header
