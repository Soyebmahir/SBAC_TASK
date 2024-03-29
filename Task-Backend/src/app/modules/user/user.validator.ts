import { z } from 'zod';

export const userValidationSchema = z.object({
    body: z.object({
        employeeId: z.string({
            required_error: 'employeeId is required.',
            invalid_type_error: 'employeeId must be a string.',
        }),
        email: z.string({
            required_error: 'email is required.',
            invalid_type_error: 'email must be a string.',
        }),
        password: z.string({
            required_error: 'password is required.',
            invalid_type_error: 'password must be a string.',
        }),

    }),
});




