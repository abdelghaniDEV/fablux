import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-8 w-full text-[10px]  placeholder:text-[13px] rounded-md border-none outline-none bg-[#5F6368] text-white px-3 py-2 text-base ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
