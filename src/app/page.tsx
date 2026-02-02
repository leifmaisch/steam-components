"use client";

import { PremierBadge } from "@/components/premier-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SteamLevel } from "@/components/steam-level";
import { FaceitLevel } from "@/components/faceit-level";
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { PackageManagerSelector } from "@/components/package-manager-selector";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Github } from "lucide-react";

const premierRatings = [4999, 9999, 14999, 19999, 29999, 39999];
const steamLevels = [1, 50, 250, 500, 1000, 6199];
const faceitLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const sizes = [
  { value: "lg" as const, label: "Large" },
  { value: "md" as const, label: "Medium" },
  { value: "sm" as const, label: "Small" },
];

function SizeShowcase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-[80px] p-2">
      {children}
    </div>
  );
}

function ComponentShowcase({
  title,
  description,
  componentName,
  exampleCode,
  examples,
  tabs,
}: {
  title: string;
  description: string;
  componentName: string;
  exampleCode: string;
  examples: Array<{
    label: string;
    component: React.ReactNode[];
  }>;
  tabs?: React.ReactNode;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-base mt-2">{description}</CardDescription>
          </div>
          {tabs && (
            <div className="flex-shrink-0">
              {tabs}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-6">
        <div className="space-y-4">
          <PackageManagerSelector componentName={componentName} />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">Usage</Badge>
              <h3 className="text-sm font-semibold text-muted-foreground">Code Example</h3>
            </div>
            <CodeBlock code={exampleCode} />
          </div>
        </div>

        <Separator />

        <div className="overflow-x-auto scrollbar-gutter-stable w-full">
          <div className="min-w-[600px]">
            <table className="table-fixed w-full text-sm" style={{ tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "140px" }} />
                <col style={{ width: "153px" }} />
                <col style={{ width: "153px" }} />
                <col style={{ width: "153px" }} />
              </colgroup>
            <thead className="[&_tr]:border-b">
              <tr>
                <th className="h-10 whitespace-nowrap px-2.5 text-left align-middle font-medium text-muted-foreground leading-none"></th>
                {sizes.map((size) => (
                  <th key={size.value} className="h-10 whitespace-nowrap px-2.5 text-center align-middle font-medium text-muted-foreground leading-none">
                    {size.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {examples.map((example, idx) => (
                <tr key={idx} className="border-b transition-colors hover:bg-muted/72">
                  <td className="whitespace-nowrap p-2.5 align-middle leading-none font-medium text-sm h-[80px]">
                    {example.label}
                  </td>
                  {example.component.map((comp, compIdx) => (
                    <td key={compIdx} className="whitespace-nowrap p-2.5 align-middle leading-none text-center h-[80px]">
                      {comp}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const componentTabs = (
  <div className="flex flex-col items-end gap-3">
    <TabsList className="grid grid-cols-3">
      <TabsTab value="premier">Premier Badges</TabsTab>
      <TabsTab value="steam">Steam Levels</TabsTab>
      <TabsTab value="faceit">FACEIT Levels</TabsTab>
    </TabsList>
    <a
      href="https://github.com/leifmaisch/steam-components"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <Github className="size-4" />
      View on GitHub
    </a>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
        <Tabs defaultValue="premier" className="w-full">
          <TabsPanel value="premier">
            <ComponentShowcase
              title="CS2 Premier Rating Badges"
              description="from 1000 to 30.000+"
              componentName="premier-badge"
              exampleCode={`import { PremierBadge } from "@/components/premier-badge"

<PremierBadge rating={14999} size="lg" />`}
              examples={premierRatings.map((rating) => ({
                label: rating.toLocaleString("en-US"),
                component: sizes.map((size) => (
                  <SizeShowcase key={size.value}>
                    <PremierBadge rating={rating} size={size.value} />
                  </SizeShowcase>
                )),
              }))}
              tabs={componentTabs}
            />
          </TabsPanel>

          <TabsPanel value="steam">
            <ComponentShowcase
              title="Steam Profile Level Badges"
              description="from 0 to 6199"
              componentName="steam-level"
              exampleCode={`import { SteamLevel } from "@/components/steam-level"

<SteamLevel level={500} size="md" />`}
              examples={steamLevels.map((level) => ({
                label: `Level ${level}`,
                component: sizes.map((size) => (
                  <SizeShowcase key={size.value}>
                    <SteamLevel level={level} size={size.value} />
                  </SizeShowcase>
                )),
              }))}
              tabs={componentTabs}
            />
          </TabsPanel>

          <TabsPanel value="faceit">
            <ComponentShowcase
              title="FACEIT Skill Level Badges"
              description="from 1-10 and Challenger"
              componentName="faceit-level"
              exampleCode={`import { FaceitLevel } from "@/components/faceit-level"

<FaceitLevel level={10} size="md" />`}
              examples={faceitLevels.map((level) => ({
                label: level === 11 ? "Challenger" : `Level ${level}`,
                component: sizes.map((size) => (
                  <SizeShowcase key={size.value}>
                    <FaceitLevel level={level} size={size.value} />
                  </SizeShowcase>
                )),
              }))}
              tabs={componentTabs}
            />
          </TabsPanel>
        </Tabs>
      </div>
    </div>
  );
}
