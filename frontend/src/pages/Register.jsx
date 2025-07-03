// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios/axois';

const Register = () => {
  const [form, setForm] = useState({ fullname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/auth/register', form);
    navigate('/login');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullname" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} type="password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
