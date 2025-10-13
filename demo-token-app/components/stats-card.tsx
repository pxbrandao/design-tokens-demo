"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function StatsCard() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Project Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Design Tokens Synced</span>
            <span>80%</span>
          </div>
          <Progress value={80} />
        </div>
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Components Updated</span>
            <span>60%</span>
          </div>
          <Progress value={60} />
        </div>
        <Badge variant="secondary" className="mt-2">
          Auto Synced
        </Badge>
      </CardContent>
    </Card>
  )
}
