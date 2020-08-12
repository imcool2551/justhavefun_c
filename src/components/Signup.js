import React from 'react';
import useInput from '../hooks/useInput';

const Signup = () => {
  const email = useInput('');
  const password = useInput('');
  const password2 = useInput('');
  const displayName = useInput('');

  const handleSubmit = (e) => {
    e.prevenDefault();
    console.log(
      email.value,
      password.value,
      password2.value,
      displayName.value,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email..." {...email} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          {...password}
        />
      </div>
      <div>
        <label htmlFor="password2">Password:</label>
        <input
          type="password"
          name="password2"
          placeholder="Validate Password..."
          {...password2}
        />
      </div>
      <div>
        <label htmlFor="password">Display Name:</label>
        <input
          type="text"
          name="displayName"
          placeholder="DisplayName..."
          {...displayName}
        />
      </div>
      <div>
        <button>Sign up</button>
      </div>
    </form>
  );
};

export default Signup;
