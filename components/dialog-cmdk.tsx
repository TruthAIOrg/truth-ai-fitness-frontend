"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useStore } from "zustand"
import useSWR from "swr"
import _ from "lodash"
import { useBoundStore } from "@/hooks/store/useBoundStore"
import { Resource } from "@/lib/data-source/getResource"

const fetcher = (url: string) => fetch(url).then((res) => res.json() as unknown as Resource[])

export function DialogCmdk() {

  const [open, setOpen] = useStore(useBoundStore, (state) => [
    state.open,
    state.setOpen,
  ])
  const [query, setQuery] = React.useState("")

  const { data, error, isLoading } = useSWR(["/api/search", query], ([url, query]) => fetcher(url + "?query=" + query))

  React.useEffect(() => {
    console.log("data", data)
  }, [data])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen(!open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput onValueChange={_.debounce(setQuery, 500)} placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            {
              data && data?.map((resource) => {
                return (
                  <CommandItem key={resource.id}>
                    <span>{resource.item_name}</span>
                  </CommandItem>
                )
              })
            }
            {/* <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem> */}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
