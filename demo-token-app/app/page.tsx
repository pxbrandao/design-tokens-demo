import { ActionButtons } from "@/components/action-buttons"
import { LoginCard } from "@/components/login-card"
import SignInForm from "@/components/sign-in"
import { StatsCard } from "@/components/stats-card"
import { ThemeDemoCard } from "@/components/theme-demo-card"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <LoginCard />
      <ThemeDemoCard />
      <StatsCard />
      <ActionButtons />
      <SignInForm />
    </div>
  )
}
