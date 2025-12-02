"use client"

import React from 'react'
import Image from 'next/image'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Rocket, Calendar, Clock } from 'lucide-react'

// Chart Data & Configuration
const chartData = [
  { name: 'Discovery & Planning', value: 2, days: '2 days' },
  { name: 'Design & Prototyping', value: 3, days: '3 days' },
  { name: 'Development', value: 6, days: '6 days' },
  { name: 'Testing & Refinement', value: 2, days: '2 days' },
  { name: 'Deployment', value: 1, days: '1 day' },
]

// Using CSS variables from globals.css for theme consistency
const COLORS = [
  "hsl(var(--chart-1))", // Discovery & Planning: Blue
  "hsl(var(--chart-4))", // Design & Prototyping: Purple
  "hsl(var(--chart-3))", // Development: Deep Purple
  "hsl(var(--chart-2))", // Testing & Refinement: Indigo
  "hsl(var(--chart-5))", // Deployment: Magenta/Pink
]

// Custom label renderer for the pie chart
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, payload }: any) => {
  const radius = outerRadius * 1.4
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="rgb(55, 65, 81)" // text-gray-700
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-xs"
    >
      {`${payload.name}: ${payload.days}`}
    </text>
  )
}

const MvpTimelineChart = () => (
  <div className="h-[320px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={renderCustomizedLabel}
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="focus:outline-none" />
          ))}
        </Pie>
        <Tooltip
            formatter={(value: number, name: string, props) => [`${props.payload.days}`, name]}
            contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius-lg)',
                color: 'hsl(var(--card-foreground))',
                fontSize: '0.875rem'
            }}
            cursor={{ fill: 'hsla(var(--muted), 0.5)' }}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

const TimelineCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-blue-600 min-w-fit">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600">{children}</p>
        </div>
      </div>
    </div>
  );

const MvpDevelopment = () => {
    return (
        <section id="mvp" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Rapid MVP Development
                    </h2>
                    <p className="text-lg text-gray-600">
                        Turn your ideas into market-ready products in just two weeks
                    </p>
                    <div className="shrink-0 mt-8 bg-blue-200 w-24 h-1 mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
                                MVP Development Timeline
                            </h3>
                            <MvpTimelineChart />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center text-gray-900">
                            <Rocket className="mr-2 h-6 w-6 text-blue-600" />
                            From Concept to Launch in 14 Days
                        </h3>
                        <p className="text-gray-700">
                            Our rapid MVP development process is designed to quickly validate your ideas, minimize time-to-market, and provide you with a solid foundation for future growth.
                        </p>
                        <div className="relative">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5c49d08-675b-4dc9-b857-a83573844347-preview--aize-vista-portal-lovable-app/assets/images/images_4.png"
                                alt="Development process visual"
                                width={584}
                                height={389}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div className="space-y-4 pt-2">
                            <TimelineCard icon={<Calendar className="h-5 w-5" />} title="Week 1">
                                Discovery, planning, design and initial development. We establish the core requirements and begin building your foundation.
                            </TimelineCard>
                            <TimelineCard icon={<Calendar className="h-5 w-5" />} title="Week 2">
                                Development completion, testing, refinement, and deployment. Your MVP is ready for market testing and user feedback.
                            </TimelineCard>
                            <TimelineCard icon={<Clock className="h-5 w-5" />} title="Post-Launch">
                                We provide ongoing support, analytics integration, and roadmap planning for future iterations based on real user feedback.
                            </TimelineCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MvpDevelopment;