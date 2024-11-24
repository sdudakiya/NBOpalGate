import { useState } from 'react';
import type { Visitor, VisitorWithStatus } from '../types/visitor';

const API_URL = 'http://localhost:3000/api/visitors';

export function useVisitorApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkIn = async (visitorData: Visitor): Promise<VisitorWithStatus> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/check-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorData),
      });

      if (!response.ok) {
        throw new Error('Failed to check in visitor');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const checkOut = async (visitorId: string): Promise<VisitorWithStatus> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/check-out/${visitorId}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to check out visitor');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getVisitors = async (): Promise<VisitorWithStatus[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch visitors');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkIn,
    checkOut,
    getVisitors,
    isLoading,
    error
  };
}