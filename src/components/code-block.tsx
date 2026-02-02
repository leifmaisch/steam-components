"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipPopup } from "@/components/ui/tooltip";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <TooltipProvider>
      <div className={cn("relative group", className)}>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm border">
          <code className="font-mono">{code}</code>
        </pre>
        <Tooltip>
          <TooltipTrigger
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8"
            onClick={copyToClipboard}
            aria-label="Copy code"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-emerald-500" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </TooltipTrigger>
          <TooltipPopup>
            {copied ? "Copied!" : "Copy code"}
          </TooltipPopup>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
