import * as React from "react"
import { SearchIcon } from '@/public/assets/icons'
import { Mic } from 'lucide-react'
import { cn } from "@/lib/utils"



const Input = React.forwardRef(
    ({ className, type, ...props }, ref) => {

        return (
            <div
                className="relative h-10 w-full"
            >
                <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 z-10 text-xl' />
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <Mic className='absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 z-10 text-xl' />
            </div>

        )
    }
)
Input.displayName = "Input"

export { Input }