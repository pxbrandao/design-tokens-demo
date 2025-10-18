import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/nextjs-vite"
import SignInForm from "@/components/sign-in"

const meta: Meta<typeof SignInForm> = {
  title: "Components/SignInForm",
  component: SignInForm,
}

export default meta
type Story = StoryObj<typeof SignInForm>

// 1️⃣ Default story: no error message
export const Default: Story = {
  render: () => <SignInForm />,
}

// 2️⃣ Story showing an error message
export const WithError: Story = {
  render: () => {
    // Controlled wrapper to force the error message
    const Wrapper = () => {
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [error, setError] = useState("Invalid credentials")

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError("Invalid credentials") // always show error
      }

      return (
        <SignInForm
          key={1} // re-render to reset state between stories
        />
      )
    }

    return <Wrapper />
  },
}
