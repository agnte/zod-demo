// Generated by ts-to-zod
import { z } from "zod";

export const addressSchema = z.object({
  street: z.string(),
  number: z.number(),
});

export const iPersonSchema = z.record(z.unknown()).and(
  z.object({
    name: z.string(),
    age: z.number().optional().nullable(),
    address: addressSchema.optional(),
  }),
);
