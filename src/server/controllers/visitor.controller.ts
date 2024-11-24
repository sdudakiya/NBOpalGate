import { Request, Response } from 'express';
import { VisitorService } from '../services/visitor.service';
import { VisitorSchema } from '../../types/visitor';

const visitorService = new VisitorService();

export const checkInVisitor = async (req: Request, res: Response) => {
  const validatedData = VisitorSchema.parse(req.body);
  const visitor = await visitorService.checkIn(validatedData);
  res.status(201).json(visitor);
};

export const checkOutVisitor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const visitor = await visitorService.checkOut(id);
  res.json(visitor);
};

export const getVisitors = async (_req: Request, res: Response) => {
  const visitors = await visitorService.getAll();
  res.json(visitors);
};