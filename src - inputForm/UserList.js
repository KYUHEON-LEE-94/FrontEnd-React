import React from 'react';

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} onClick={() => onToggle(user.id)}>
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {/* React에서 배열을 렌더링할때는 key라는 props를 설정해야한다. */}
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
                /// {/* map은 index도 받을 수 있으니까  index순서대로 0,1,3으로 들어감*/ }
                // {/* 값이 수정되는 경우에:  key값이 없다면, 처음부터 다시 렌더링을 하지만, 있으면 key값에 따라 값을 바로 넣어줄 수 있음 */ }
            ))}
        </div>
    );
}


export default UserList;