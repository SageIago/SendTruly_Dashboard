import { CheckIcon, ClipboardIcon } from "lucide-react"
import * as React from "react"

import { Button, ButtonProps } from "@/components/ui/button"
import { Event, trackEvent } from "@/lib/event"
import { cn, RenderToasts } from "@/lib/utils"

interface CopyButtonProps extends ButtonProps {
  value: string
  src?: string
  event?: Event["name"],
  textvalue: string
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value)
  if (event) {
    trackEvent(event)
  }
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  event,
  textvalue,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  if(hasCopied) {
    RenderToasts({
      type: "info", 
      description: "",
      title: "You have Copied Your API Key"
    })
  }

  return (
    <Button
      variant={variant}
      className={cn(
        "relative z-10 px-10 py-4 flex gap-2 w-[500px] !mt-3 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined
        )
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? "Copied" : <>{textvalue}</>}
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  )
}