// src/components/SignIn.js
import axios from 'axios';
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const SignInForm = () => {
  const [email, setEmail] = useState('dav.ndungutse@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { onLogin } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoggingIn(true);

    try {
      setError('');
      const credentials = { email, password };
      const res = await axios.post(
        'http://localhost:3000/api/v1/auth/sign-in',
        {
          ...credentials,
        }
      );

      const data = res.data;
      onLogin({
        ...data.data,
        token: data.token,
      });
      console.log(data);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoggingIn(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className='bg-red-200 border-l-4 border-red-700 p-4 mb-4'>
          <p className='text-red-900'>{error}</p>
        </div>
      )}

      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-600'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='mt-1 p-2 w-full border rounded-md'
          value={email}
          disabled={isLoggingIn}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
        />
      </div>
      <div className='mb-1'>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-600'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          className='mt-1 p-2 w-full border rounded-md'
          autoComplete='current-password'
          value={password}
          disabled={isLoggingIn}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
        />
      </div>

      <div className='flex justify-between mb-8'>
        <p className='text-gray-600'>
          Don't have an account?{' '}
          <button className='text-blue-500 hover:underline'>Sign Up</button>
        </p>

        <button className='text-blue-500 hover:underline'>
          Forgot Password?
        </button>
      </div>

      <button
        type='submit'
        disabled={isLoggingIn}
        className='bg-blue-500 w-full text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-purple-700 disabled:opacity-40'
      >
        {!isLoggingIn ? 'Log in' : 'Wait...'}
      </button>
    </form>
  );
};

export default SignInForm;
