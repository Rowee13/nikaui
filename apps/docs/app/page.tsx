import { Button } from "@nikaui/registry/ui/button";
import { Badge } from "@nikaui/registry/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@nikaui/registry/ui/card";
import { Input } from "@nikaui/registry/ui/input";
import { Separator } from "@nikaui/registry/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Nika UI</h1>
          <p className="text-muted-foreground">
            Documentation — Component library powered by Tailwind CSS and
            Motion.
          </p>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Components Preview</CardTitle>
            <CardDescription>
              A quick look at the foundational Nika UI components.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Badges</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Input</h3>
              <Input placeholder="Type something..." />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
