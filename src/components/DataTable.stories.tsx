import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import type { Column } from "./DataTable";

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

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

// Default table
export const Default: Story = {
  args: {
    data: users,
    columns,
  },
};

// Selectable rows
export const Selectable: Story = {
  args: {
    data: users,
    columns,
    selectable: true,
  },
};

// Loading state
export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
