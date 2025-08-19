# React Component Assignment  

This project contains two reusable UI components built with **React, TypeScript, TailwindCSS, and Storybook**.  

## 📦 Tech Stack  
- **React + Vite** (bundler)  
- **TypeScript** (type safety)  
- **TailwindCSS** (styling)  
- **Storybook** (component docs + preview)  

---

## 🚀 Components  

### 1. InputField  
A flexible input component with multiple states, variants, and sizes.  

**Features:**  
- Label, placeholder, helper text, error message  
- States: normal, disabled, invalid  
- Variants: filled, outlined, ghost  
- Sizes: small, medium, large  

**Example usage:**  
```tsx
<InputField
  label="Username"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter username"
  helperText="This will be your public name"
  variant="outlined"
  size="md"
/>

# DataTable Component  

A reusable **DataTable** component built with **React, TypeScript, TailwindCSS, and Storybook**.  

## 📦 Tech Stack  
- **React + Vite**  
- **TypeScript** for strong typing  
- **TailwindCSS** for styling  
- **Storybook** for component documentation  

---

## 🚀 Features  
- Display tabular data  
- Sortable columns (click header to sort)  
- Row selection (checkboxes)  
- Loading state  
- Empty state  
- Responsive layout  

---

## 🛠 Props  

```ts
interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

