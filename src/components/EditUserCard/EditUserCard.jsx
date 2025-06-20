import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/actions'; // Импорт экшена

const EditUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [username, setUsername] = useState(user.username);
  const [userage, setUserage] = useState(user.userage);

  const handleUpdate = () => {
    dispatch(updateUser({ username, userage }));
  };

  return (
    <div>
      <h3>Редактировать пользователя</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Имя пользователя"
      />
      <input
        type="number"
        value={userage}
        onChange={(e) => setUserage(Number(e.target.value))}
        placeholder="Возраст"
      />
      <button onClick={handleUpdate}>Обновить</button>
    </div>
  );
};

export default EditUser;
