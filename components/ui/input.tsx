import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftSection?: React.ReactNode
  leftSectionProps?: React.ComponentPropsWithoutRef<'div'>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftSection, leftSectionProps, type, ...props }, ref) => {
    return (
      <div className="relative" >
        {leftSection && <div
          {...leftSectionProps}
          className="absolute z-[1] pointer-events-none left-0 top-0 bottom-0 flex items-center justify-center w-9 text-[rgb(144,146,150)]">
          {leftSection}
        </div>
        }
        <input
          type={type}
          className={cn(
            " transition-shadow ring-0  flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            {
              "pl-9": leftSection,
            },
            className
          )}
          ref={ref}
          {...props}
        />
      </div>

    )
  }
)
Input.displayName = "Input"

export { Input }
