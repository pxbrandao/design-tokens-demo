"use client"
import { useState } from "react"

export function LoginCard() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Logged in as ${username}`)
  }

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-sm mx-auto p-6 rounded-md shadow-lg bg-background text-foreground"
    >
      <h2 className="text-2xl font-medium mb-4">Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-3 px-4 py-2 rounded-md border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-md border border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <button className="w-full py-2 px-4 rounded-md bg-primary text-primary-foreground hover:brightness-90">
        Login
      </button>
      <button className="w-full py-2 px-4 rounded-md bg-[var(--primary)] text-[var(--color-primary-foreground)] hover:brightness-90">
        Login
      </button>
    </form>
  )
}
