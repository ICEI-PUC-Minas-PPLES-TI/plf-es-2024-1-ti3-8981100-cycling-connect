import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email({message: 'Insira um e-mail válido.'}),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});