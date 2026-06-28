type DashboardStatCardProps = {
  label: string
  value: string | number
}

export function DashboardStatCard({ label, value }: DashboardStatCardProps) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-4">
      <p className="text-2xl font-black tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground md:text-sm">{label}</p>
    </div>
  )
}
