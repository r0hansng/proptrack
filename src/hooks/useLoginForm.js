import { useState, useEffect } from 'react';

export function useLoginForm() {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: '',
    description: '',
  });
  const [storedUser, setStoredUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sessionUser =
      JSON.parse(localStorage.getItem('proptrack_user')) ||
      JSON.parse(sessionStorage.getItem('proptrack_user'));

    if (sessionUser?.isLoggedIn) {
      window.location.href = '/';
    }
  }, []);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEmailSubmit = () => {
    if (!isValidEmail(email)) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
      return;
    }

    const user = JSON.parse(localStorage.getItem('userData'));

    if (!user || user.email !== email) {
      setToastContent({
        title: 'User Not Found',
        description: 'Please register before logging in.',
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }

    setStoredUser(user);
    setStep('password');
    setShowTooltip(false);
  };

  const handleFormSubmit = () => {
    if (!storedUser || storedUser.password !== password) {
      setToastContent({
        title: 'Incorrect Password',
        description: 'The password you entered is incorrect.',
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
      return;
    }

    const loginSession = {
      ...storedUser,
      isLoggedIn: true,
      keepLoggedIn,
    };

    if (keepLoggedIn) {
      localStorage.setItem('proptrack_user', JSON.stringify(loginSession));
    } else {
      sessionStorage.setItem('proptrack_user', JSON.stringify(loginSession));
    }

    setToastContent({
      title: 'Logged In',
      description: 'Welcome back!',
    });
    setShowToast(true);

    setIsLoading(true);
    setTimeout(() => {
      setShowToast(false);
      window.location.href = '/';
    }, 1500);
  };

  return {
    step,
    email,
    setEmail,
    password,
    setPassword,
    keepLoggedIn,
    setKeepLoggedIn,
    showTooltip,
    showToast,
    toastContent,
    isLoading,
    handleEmailSubmit,
    handleFormSubmit,
  };
}
