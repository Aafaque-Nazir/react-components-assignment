import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Default story
export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    variant: "outlined",
    size: "md",
    helperText: "This will be your public name",
  },
};

// Variants
export const Filled: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    variant: "filled",
  },
};

export const Ghost: Story = {
  args: {
    label: "Search",
    placeholder: "Search here...",
    variant: "ghost",
  },
};

// States
export const Disabled: Story = {
  args: {
    label: "Disabled field",
    placeholder: "Can't type",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    invalid: true,
    errorMessage: "Password is required",
  },
};

// Sizes
export const Small: Story = {
  args: {
    label: "Small input",
    placeholder: "sm size",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large input",
    placeholder: "lg size",
    size: "lg",
  },
};
