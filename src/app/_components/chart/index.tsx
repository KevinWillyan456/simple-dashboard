'use client'

import { DollarSign } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ChartConfig, ChartContainer } from '../ui/chart'

export function ChartOverview() {
    const chartData = [
        { month: 'Janeiro', desktop: 186, mobile: 80 },
        { month: 'Fevereiro', desktop: 305, mobile: 200 },
        { month: 'Março', desktop: 237, mobile: 120 },
        { month: 'Abril', desktop: 73, mobile: 190 },
        { month: 'Maio', desktop: 209, mobile: 130 },
        { month: 'Junho', desktop: 214, mobile: 140 },
    ]

    const chartConfig = {
        desktop: {
            label: 'Desktop',
            color: '#2563eb',
        },
        mobile: {
            label: 'Mobile',
            color: '#60a5fa',
        },
    } satisfies ChartConfig

    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg text-gray-800 sm:text-xl">
                        Overview vendas
                    </CardTitle>
                    <DollarSign className="ml-auto h-4 w-4" />
                </div>
            </CardHeader>

            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="min-h-[200px] w-full"
                >
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar
                            dataKey="desktop"
                            fill={chartConfig.desktop.color}
                            radius={4}
                        />
                        <Bar
                            dataKey="mobile"
                            fill={chartConfig.mobile.color}
                            radius={4}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
