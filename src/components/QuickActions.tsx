import React from 'react';
import { UserPlus, Car, Package, Calendar, Shield, Megaphone } from 'lucide-react';

const actions = [
  { icon: UserPlus, label: 'Invite', color: 'bg-blue-100 text-blue-600' },
  { icon: Car, label: 'Daily Help', color: 'bg-green-100 text-green-600' },
  { icon: Package, label: 'Delivery', color: 'bg-purple-100 text-purple-600' },
  { icon: Calendar, label: 'Amenities', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Shield, label: 'Security', color: 'bg-red-100 text-red-600' },
  { icon: Megaphone, label: 'Notice', color: 'bg-indigo-100 text-indigo-600' },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {actions.map(({ icon: Icon, label, color }) => (
        <button
          key={label}
          className="flex flex-col items-center p-4 rounded-xl transition-transform hover:scale-105"
        >
          <div className={`p-3 rounded-full ${color}`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
}