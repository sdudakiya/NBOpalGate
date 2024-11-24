import React, { useState } from 'react';
import { format } from 'date-fns';
import VisitorForm from '../components/VisitorForm';
import VisitorList from '../components/VisitorList';
import type { Visitor, VisitorWithStatus } from '../types/visitor';

export default function VisitorManagement() {
  const [visitors, setVisitors] = useState<VisitorWithStatus[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVisitorCheckIn = async (data: Visitor) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newVisitor: VisitorWithStatus = {
        ...data,
        id: crypto.randomUUID(),
        checkInTime: new Date(),
        status: 'checked-in'
      };
      
      setVisitors(prev => [newVisitor, ...prev]);
    } catch (error) {
      console.error('Failed to check in visitor:', error);
      // Handle error (show toast notification, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVisitorCheckOut = async (visitorId: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setVisitors(prev =>
        prev.map(visitor =>
          visitor.id === visitorId
            ? { ...visitor, status: 'checked-out', checkOutTime: new Date() }
            : visitor
        )
      );
    } catch (error) {
      console.error('Failed to check out visitor:', error);
      // Handle error
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Visitor Management</h1>
        <p className="text-gray-600">
          {format(new Date(), 'EEEE, MMMM d, yyyy')}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">New Visitor Check-in</h2>
        <VisitorForm onSubmit={handleVisitorCheckIn} isLoading={isSubmitting} />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Today's Visitors</h2>
        <VisitorList visitors={visitors} onCheckOut={handleVisitorCheckOut} />
      </div>
    </div>
  );
}