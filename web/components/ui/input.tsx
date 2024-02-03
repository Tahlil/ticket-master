import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer placeholder-transparent pt-3 px-0 mt-0 block w-full bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-black border-zinc-700",
            className
          )}
          ref={ref}
          {...props} />
        <label htmlFor={props.id} className="absolute uppercase left-0 -top-3.5 text-zinc-400 transition-all text-sm min-[1920px]:text-lg peer-placeholder-shown:text-xs min-[1920px]:peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs min-[1920px]:peer-focus:text-xs">{props.placeholder}</label>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
