"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ThemeDemoCard() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Theme Tokens</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary" />
          <span className="text-sm">Primary</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary" />
          <span className="text-sm">Secondary</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-destructive" />
          <span className="text-sm">Destructive</span>
        </div>
      </CardContent>
    </Card>
  )
}
