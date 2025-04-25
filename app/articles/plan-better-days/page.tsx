'use client';

import { Card } from "@/components/ui/card";
import { CalendarDays, CheckCircle, Target, Clock } from "lucide-react";

export default function PlanBetterDays() {
  const weeklyTips = [
    {
      icon: <CalendarDays className="w-6 h-6 text-blue-500" />,
      title: "Start with Weekly Overview",
      description: "Begin by reviewing your major goals and commitments for the week. This helps you get a bird's eye view of what's ahead."
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Set Clear Priorities",
      description: "Identify 2-3 main priorities for each day. Focus on tasks that align with your long-term goals."
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: "Time Blocking",
      description: "Allocate specific time blocks for different activities. Include breaks and buffer time for unexpected tasks."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: "Daily Review",
      description: "End each day by reviewing tomorrow's plan and adjusting as needed. Celebrate your accomplishments!"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Plan Your Week Better</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-xl text-center text-gray-600">
          Every week, we share practical tips and strategies to help you plan your days more effectively.
          Follow these guidelines to create a structured and balanced week.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {weeklyTips.map((tip, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {tip.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">This Week's Focus</h2>
        <p className="text-gray-600 mb-4">
          This week, we recommend focusing on creating a balanced schedule that includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Work or study commitments</li>
          <li>Physical activity and exercise</li>
          <li>Social connections and family time</li>
          <li>Personal development activities</li>
          <li>Rest and relaxation periods</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Check back next week for new planning strategies and tips!
        </p>
      </div>
    </div>
  );
}
