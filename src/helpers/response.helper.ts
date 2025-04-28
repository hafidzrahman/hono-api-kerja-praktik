import { Context } from "hono";
import { ZodError } from "zod";

export const successResponse = (ctx: Context, data: any, message: string = "Success", status: number = 200) => {
  return ctx.json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (ctx: Context, message: string, errors: any = null, status: number = 400) => {
  return ctx.json({
    success: false,
    message,
    errors,
  });
};

export const handleZodError = (ctx: Context, error: ZodError) => {
  const errors = error.errors.map((err) => ({
    path: err.path.join('.'),
    message: err.message,
  }));
  
  return errorResponse(ctx, "Validation Error", errors, 400);
};

export const handleAuthError = (ctx: Context) => {
  return errorResponse(ctx, "Unauthorized", null, 401);
};