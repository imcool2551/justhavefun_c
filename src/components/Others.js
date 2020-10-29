import React, { useState } from 'react'
import { useQuery, useLazyQuery } from '@apollo/client';
import { allUsersQuery, todosQuery } from '../queries/querie';

const Others = () => {
  const [userId, setUserId] = useState(''); 
  const { data: userData, loading, error } = useQuery(allUsersQuery, {
    pollInterval: 2000,
  });
  const [getTodos, { data: todoData } ] = useLazyQuery(todosQuery);

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserId(e.target.value);
    getTodos({ variables: { id: e.target.value }});
  }

  if (loading) return 'Loading Users...';
  if (error) return 'Error..';
  return (
    <>
      <select onChange={handleChange} value={userId}>
        {
          userData.allUsers.map(({ id, displayName}) => {
            return <option value={id} key={id}>{displayName}</option>
          })
        }
      </select>
      <ul>
        {
          todoData? todoData.todos.map(({ id, text, done}, index) => {
            if (done)
             return <li key={id} style={{textDecoration: 'line-through'}}>{index+1} 번째 : {text}</li>;
            return <li key={id}>{index+1} 번째 : {text}</li>;
          }) :
          <li>Loading Todos...</li>
        }
      </ul>
    </>
  )
}

export default Others
