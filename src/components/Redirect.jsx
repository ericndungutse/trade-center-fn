import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import SignIn from '../pages/SignIn';

export default function Redirect() {
  const { user } = useUser();
  if (user) return <Navigate replace to='/' />;

  return <SignIn />;
}
