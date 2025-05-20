"use client";
import components from "../components";
import { requestAxios } from "@/api";
import { UserRole } from "@/interface";
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role:
    | {
        name: UserRole | string;
      }
    | string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    role: "editor",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await requestAxios.get("/users");
      if (response.status === 200) {
        // Normalize role data to always have consistent structure
        const normalizedUsers = response.data.data.map((user: User) => ({
          ...user,
          role:
            typeof user.role === "string"
              ? user.role
              : user.role?.name || "editor",
        }));
        setUsers(normalizedUsers);
      }
    } catch (error) {
      setError("Failed to fetch users");
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async () => {
    try {
      let response;
      if (newUser.id) {
        // Update existing user
        response = await requestAxios.put(`//users/modify/update-user${newUser.id}`, newUser);
        setMessage("User updated successfully");
      } else {
        // Create new user
        response = await requestAxios.post("/users/auth/register", newUser);
        setMessage("User created successfully");
      }

      if ([200, 201].includes(response.status)) {
        fetchUsers(); // Refresh the user list
        setIsModalOpen(false);
        setNewUser({
          id: 0,
          first_name: "",
          last_name: "",
          email: "",
          role: "editor",
        });
      }
    } catch (error) {
      setError("Failed to save user");
      console.error("Error saving user:", error);
    }
  };

  const handleEditUser = (user: User) => {
    setNewUser(user);
    setIsModalOpen(true);
    setMessage("");
    setError("");
  };

  const handleDeleteUser = async (userId: number) => {
    const confirmDelete = confirm(
      `Are you sure you want to delete user ${userId}?`
    );
    if (!confirmDelete) return;

    try {
      const response = await requestAxios.delete(`/users/${userId}`);
      if (response.status === 204) {
        setMessage("User deleted successfully");
        setUsers(users.filter((user) => user.id !== userId));
      }
    } catch (error) {
      setError("Failed to delete user");
      console.error("Error deleting user:", error);
    }
  };

  const userFields = [
    { label: "First Name", field: "first_name" },
    { label: "Last Name", field: "last_name" },
    { label: "Email", field: "email" },
    { label: "Password", field: "password" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>

      {message && <div className="text-green-500 mb-4">{message}</div>}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>

      <components.Table
        data={users}
        columns={[
          { key: "first_name", label: "First Name" },
          { key: "last_name", label: "Last Name" },
          { key: "email", label: "Email" },
          { key: "role", label: "Role" },
        ]}
        actions={(user) => (
          <components.ActionButtons
            onEdit={() => handleEditUser(user)}
            onDelete={() => handleDeleteUser(user.id)}
            isSubscribed={false}
          />
        )}
      />

      <components.Modal
        isOpen={isModalOpen}
        title={newUser.id ? "Edit User" : "Add User"}
        onClose={() => {
          setIsModalOpen(false);
          setNewUser({
            id: 0,
            first_name: "",
            last_name: "",
            email: "",
            role: "editor",
          });
          setMessage("");
          setError("");
        }}
      >
        {userFields.map(({ label, field }) => (
          <components.InputField
            key={field}
            type="text"
            label={label}
            value={String(newUser[field as keyof User] || "")}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                [field]: e.target.value,
              })
            }
          />
        ))}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Role</label>
          <select
            value={typeof newUser.role === "string" ? newUser.role : newUser.role.name}
            onChange={(e) =>
              setNewUser({ ...newUser, role: e.target.value as UserRole })
            }
            className="border p-2 w-full rounded-md"
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </div>
        <button
          onClick={handleAddUser}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {newUser.id ? "Update" : "Save"}
        </button>
      </components.Modal>
    </div>
  );
};

export default UserManagement;
