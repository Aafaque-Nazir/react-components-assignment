import { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable } from "./components/DataTable";
import type { Column } from "./components/DataTable";

function App() {
  const [name, setName] = useState("");

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
    <div className="p-8 space-y-6 max-w-md mx-auto">
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
       <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold">Users</h1>
      <DataTable
        data={users}
        columns={columns}
        selectable
        onRowSelect={(rows) => console.log("Selected:", rows)}
      />
    </div>
    </div>
  );
}

export default App;
