import React from 'react';
import { Package, User, Bell } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'delivery',
    title: 'Package Arrived',
    description: 'Amazon delivery at security gate',
    time: '2 mins ago',
    icon: Package,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 2,
    type: 'visitor',
    title: 'Visitor Entry',
    description: 'John from Maintenance',
    time: '15 mins ago',
    icon: User,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 3,
    type: 'notice',
    title: 'Society Notice',
    description: 'Monthly maintenance due',
    time: '1 hour ago',
    icon: Bell,
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export default function ActivityFeed() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm"
          >
            <div className={`p-2 rounded-full ${activity.color}`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{activity.title}</h3>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}