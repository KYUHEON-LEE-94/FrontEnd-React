import React, { useRef, useState,useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    //nextId.current기본값을 4로 지정하면서 id의 value에 넣어줌
    const user = {
      id: nextId.current,
      username,
      email
    };
    //onCreate를 누르면 새로운 Users의 요소 생성
    setUsers([...users, user]);

    //input은 초기화
    setInputs({
      username: '',
      email: ''
    });
    //다음의 id를 위해서 값 증가
    nextId.current += 1;
  };//

  const onRemove = id => {
    //전달받는 id이 외의 값은 리턴받아서 남긴다.
    setUsers(users.filter(user => user.id !== id))
  }//

  const onToggle = id => {
    setUsers(users.map(user =>
      //입력받은  id가 user.id와 같다면 user.active를 반전시키고, 그게 아니면 user그대로 
      user.id === id ? { ...user, active: !user.active } : user))
  };
  const count = useMemo(() =>countActiveUsers(users),[users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;