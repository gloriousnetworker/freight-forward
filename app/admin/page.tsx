"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
}

export default function ProfilePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  // Fetch all registered users
  const fetchUsers = async () => {
    try {
      setLoading(true);

      // Retrieve token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Authentication token not found. Please log in.");
        toast.error("Authentication token not found. Please log in.");
        router.push("/login");
        return;
      }

      // Make the API call with the token in the headers
      const response = await axios.get(
        "https://arthurgreatbackend.vercel.app/api/accounts/profiles",
        {
          headers: {
            Authorization: `Token ${token}`, // ✅ Correct for Django TokenAuth
          },
        }
      );

      setUsers(response.data);
    } catch (err: any) {
      console.error("Error fetching users:", err);

      // Handle 401 Unauthorized errors
      if (err.response?.status === 401) {
        setError("Unauthorized. Please log in again.");
        toast.error("Your session has expired. Please log in again.");
        localStorage.removeItem("token");
        router.push("/login");
      } else {
        setError(err.response?.data?.message || "Failed to fetch users");
        toast.error("Failed to load user data. You are not an Admin!.");
        router.push("/");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>User Profiles | Arthur Great Logistics</title>
      </Head>

      {/* Toast notifications container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div
        className="max-w-4xl w-full space-y-8 p-10 rounded-xl shadow-lg"
        style={{
          backgroundImage: "url(/images/logistics-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Registered Users
          </h2>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <svg
                className="animate-spin h-8 w-8 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.first_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.last_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.date_joined).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                      >
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}