import { query, validationResult } from 'express-validator';

export const validateCompletedQuery = [
  query('completed')
    .optional()
    .custom((value) => {
      if (value !== undefined && value !== null && value !== '') {
        if (value === 'true' || value === 'false') {
          return true;
        }
        throw new Error('completed must be true or false');
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Bad Request',
        details: errors.array().map((err) => err.msg),
      });
    }
    next();
  },
];
