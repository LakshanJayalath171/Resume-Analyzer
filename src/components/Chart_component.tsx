import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A line chart with a custom label"

const chartData = [
  { version: "v1", score: 71 },
  { version: "v2", score: 65 },
  { version: "v3", score: 82 },
  { version: "v4", score: 78 },
  { version: "v5", score: 60 },
]

const chartConfig = {
  score: {
    label: "score",
    color: "#3b82f6",
  },
  v1: {
    label: "v1",
    color: "var(--chart-1)",
  },
  v2: {
    label: "v2",
    color: "var(--chart-2)",
  },
  v3: {
    label: "v3",
    color: "var(--chart-3)",
  },
  v4: {
    label: "v4",
    color: "var(--chart-4)",
  },
  v5: {
    label: "v5",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig


interface ChartLineLabelCustomProps {
  title:string
  description:string
  footerHeader:string
  footerDescription:string
}

export function ChartLineLabelCustom({title, description,footerHeader,footerDescription}:ChartLineLabelCustomProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-primary font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="version"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="score"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="score"
              type="natural"
              stroke="var(--color-score)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-score)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="version"
                formatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {footerHeader}
        </div>
        <div className="text-purple font-bold">
          {footerDescription}
        </div>
      </CardFooter>
    </Card>
  )
}
