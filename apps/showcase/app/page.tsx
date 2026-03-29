import { Button } from "@nikaui/registry/ui/button";
import { Badge } from "@nikaui/registry/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@nikaui/registry/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <Badge>v0.1.0</Badge>
          <h1 className="text-5xl font-bold tracking-tight">Nika UI</h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Beautiful, animated components built with Tailwind CSS and Motion.
            Copy and paste into your apps.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Browse Components
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Tailwind Native</CardTitle>
              <CardDescription>
                Built entirely with Tailwind CSS. No external CSS files.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Motion Powered</CardTitle>
              <CardDescription>
                Smooth animations with Motion. Every component feels alive.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Copy & Paste</CardTitle>
              <CardDescription>
                Own the code. Install components individually via CLI.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
