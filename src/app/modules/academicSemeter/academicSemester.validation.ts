import { z } from 'zod';

const createZodSchema = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is require!!',
    }),
    title: z.string({
      required_error: 'title is required!!',
    }),
    code: z.string({
      required_error: 'code is required!!',
    }),
    startMonth: z.string({
      required_error: 'startMonth is required!!',
    }),
    endMonth: z.string({
      required_error: 'endMonth is required!!',
    }),
  }),
});

export const AcademicSemesterValidation = { createZodSchema };
