import { useState, useEffect } from "react";
import { InputField } from "./components/InputField";
import { DataTable } from "./components/DataTable";
import type { Column } from "./components/DataTable";

function App() {
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }

  const users: User[] = [
    { id: 1, name: "Aafaque", email: "aafaque@example.com", age: 24 },
    { id: 2, name: "Sufiyan", email: "sufi@example.com", age: 28 },
    { id: 3, name: "Nazir", email: "nazir@example.com", age: 35 },
  ];

  const columns: Column<User>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email" },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-10 px-4 transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          UI Components Showcase
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Reusable form inputs and data tables built with React, TS, and Tailwind
        </p>

        {/* Dark Mode Toggle */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
        >
          <div
            className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
              darkMode ? "translate-x-8 bg-yellow-400" : "bg-gray-800 text-white"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-10">
        {/* Form Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-6 transition-colors duration-300 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            Form Inputs
          </h2>

          <InputField
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
            helperText="This will be your public name"
            variant="outlined"
            size="md"
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
            invalid
            errorMessage="Password is required"
            variant="filled"
            size="lg"
          />

          <InputField
            label="Disabled field"
            placeholder="Can't type here"
            disabled
            variant="ghost"
          />
        </div>

        {/* Table Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-colors duration-300 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Users
          </h2>
          <DataTable
            data={users}
            columns={columns}
            selectable
            onRowSelect={(rows) => console.log("Selected:", rows)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
