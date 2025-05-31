import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRegistrationForm() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 121 }, (_, i) => currentYear - i);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    month: '',
    day: '',
    year: '',
    address1: '',
    address2: '',
    email: '',
    phone: '',
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    setPasswordError('');

    const existingData = JSON.parse(localStorage.getItem('userData'));

    if (existingData && existingData.email === formData.email) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        navigate('/login');
      }, 4000);

      return;
    }

    const fullFormData = {
      ...formData,
      password,
    };

    localStorage.setItem('userData', JSON.stringify(fullFormData));
    console.log('Form submitted successfully!', fullFormData);
    navigate('/login');
  };

  return {
    formData,
    setFormData,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    passwordError,
    setPasswordError,
    showToast,
    setShowToast,
    years,
    handleChange,
    handleSubmit,
  };
}
