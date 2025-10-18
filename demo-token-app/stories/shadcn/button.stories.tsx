import { Button, ButtonProps } from "@/components/ui/button"
import { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Bell } from "lucide-react"
import React from "react"

const meta: Meta<ButtonProps> = {
  title: "UI/Button",
  parameters: {
    layout: "centered",
  },
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "radio",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
}

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "default",
  },
}

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    size: "default",
  },
}

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
    size: "default",
  },
}

export const Icon: Story = {
  args: {
    children: <Bell className="h-4 w-4" />,
    variant: "default",
    size: "icon",
  },
}

export const link: Story = {
  args: {
    children: "Button",
    variant: "link",
    size: "default",
  },
}
