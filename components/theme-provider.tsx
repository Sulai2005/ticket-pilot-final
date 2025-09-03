import type React from "react"

type Props = {
  children: React.ReactNode
}

function ThemeProvider({ children }: Props) {
  return <>{children}</>
}

export { ThemeProvider }
export default ThemeProvider
