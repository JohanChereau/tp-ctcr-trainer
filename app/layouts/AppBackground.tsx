export function AppBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-background" />

      {/* Main glow */}
      <div className="fixed top-1/3 left-1/2 -z-40 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[180px]" />

      {/* Secondary glow */}
      <div className="fixed top-0 right-0 -z-40 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[140px]" />

      {/* Bottom glow */}
      <div className="fixed bottom-0 left-0 -z-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      {/* Vignette */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_center,transparent_40%,hsl(var(--background))_100%)]" />
    </>
  )
}
