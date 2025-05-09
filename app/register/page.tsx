'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  first_name: string;
  last_name: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      toast.error('Passwords do not match');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        first_name: formData.first_name,
        last_name: formData.last_name,
      };

      const response = await axios.post(
        'https://arthurgreatbackend.vercel.app/api/accounts/register/',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 201 || response.status === 200) {
        localStorage.setItem('authToken', response.data.token || '');

        toast.success('Registration successful! Redirecting to login...');
        setTimeout(() => router.push('/login'), 1500);
      }
    } catch (err: any) {
      console.error('Registration error:', err);

      const message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        'Registration failed. Please try again.';

      setError(message);
      toast.error(message);

      // Display individual field errors (e.g. email, username)
      if (err.response?.data && typeof err.response.data === 'object') {
        Object.entries(err.response.data).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            toast.error(`${key}: ${value[0]}`);
          }
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Register | Arthur Great Logistics</title>
      </Head>

      <Toaster position="top-center" reverseOrder={false} />

      <div
        className="max-w-md w-full space-y-8 p-10 rounded-xl shadow-lg"
        style={{
          backgroundImage: 'url(/images/logistics-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              {[
                { id: 'username', label: 'Username' },
                { id: 'first_name', label: 'First Name' },
                { id: 'last_name', label: 'Last Name' },
                { id: 'email', label: 'Email address', type: 'email' },
                { id: 'password', label: 'Password', type: 'password' },
                { id: 'confirmPassword', label: 'Confirm Password', type: 'password' },
              ].map(({ id, label, type = 'text' }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required
                    disabled={loading}
                    autoComplete={id}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    value={(formData as any)[id]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registering...
                </>
              ) : (
                'Register'
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-green-700 hover:text-green-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
