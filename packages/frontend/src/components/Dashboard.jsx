import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Dashboard() {
  const stats = [
    { label: "Questions Solved", value: "42/100" },
    { label: "Average Time", value: "25 mins" },
    { label: "Success Rate", value: "75%" },
  ];

  const topics = [
    { name: "Arrays & Strings", progress: 65 },
    { name: "Trees & Graphs", progress: 40 },
    { name: "Dynamic Programming", progress: 25 },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Your Progress</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Topic Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topics.map((topic) => (
              <div key={topic.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{topic.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {topic.progress}%
                  </span>
                </div>
                <Progress value={topic.progress} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
