"use client"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Monitor, MoonIcon, SunIcon } from "lucide-react"

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!theme || theme === "system") {
      setTheme("dark")
    }
  }, [setTheme, theme])

  if (!mounted) return null

  return (
    <Tabs defaultValue={theme || "dark"}>
      <TabsList className="border dark:border-zinc-600 dark:bg-zinc-800">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-4 w-4 rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <Monitor className="h-4 w-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher
