"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";

export type PackageManager = "pnpm" | "npm" | "bun" | "yarn";

const packageManagers: PackageManager[] = ["pnpm", "npm", "bun", "yarn"];

function getCurrentDomain(): string {
  if (typeof window === "undefined") {
    return "https://steam-components.pages.dev";
  }
  const protocol = window.location.protocol === "https:" ? "https" : "https";
  return `${protocol}://${window.location.hostname}`;
}

export function getInstallCommand(
  packageManager: PackageManager,
  componentName: string,
  domain?: string
): string {
  const currentDomain = domain || getCurrentDomain();
  const componentUrl = `${currentDomain}/registry/${componentName}.json`;
  const baseCommand = `shadcn@latest add ${componentUrl}`;
  
  switch (packageManager) {
    case "pnpm":
      return `pnpm dlx ${baseCommand}`;
    case "npm":
      return `npx ${baseCommand}`;
    case "bun":
      return `bunx ${baseCommand}`;
    case "yarn":
      return `yarn dlx ${baseCommand}`;
    default:
      return `npx ${baseCommand}`;
  }
}

interface PackageManagerSelectorProps {
  componentName: string;
  defaultManager?: PackageManager;
}

export function PackageManagerSelector({
  componentName,
  defaultManager = "pnpm",
}: PackageManagerSelectorProps) {
  const [packageManager, setPackageManager] = useState<PackageManager>(defaultManager);
  const [domain, setDomain] = useState<string>("https://steam-components.pages.dev");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const protocol = window.location.protocol === "https:" ? "https" : "https";
      setDomain(`${protocol}://${window.location.hostname}`);
    }
  }, []);

  const installCommand = getInstallCommand(packageManager, componentName, domain);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">Install</Badge>
          <h3 className="text-sm font-semibold text-muted-foreground">CLI Command</h3>
        </div>
        <div className="flex items-center gap-1">
          {packageManagers.map((pm) => (
            <Button
              key={pm}
              variant={packageManager === pm ? "default" : "ghost"}
              size="xs"
              onClick={() => setPackageManager(pm)}
              className="text-xs"
            >
              {pm}
            </Button>
          ))}
        </div>
      </div>
      <CodeBlock code={installCommand} />
    </div>
  );
}
