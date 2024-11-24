import React from 'react';
import SecurityCard from '../components/SecurityCard';
import QuickActions from '../components/QuickActions';
import ActivityFeed from '../components/ActivityFeed';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
        <p className="text-gray-600">Green Valley Apartments</p>
      </div>
      <SecurityCard />
      <QuickActions />
      <ActivityFeed />
    </div>
  );
}