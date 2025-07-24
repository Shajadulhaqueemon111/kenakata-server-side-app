/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

export const parseFormDataJSON = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.body?.data) {
    try {
      const parsed = JSON.parse(req.body.data);
      req.body = {
        ...parsed, // 👈 flatten the parsed fields into req.body
      };
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Invalid JSON in form-data "data" field',
      });
    }
  }
  next();
};
