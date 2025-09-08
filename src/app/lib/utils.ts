import { z } from "zod";
export type Cantante = {
  id: number;
  nombre: string;
  edad: number;
  generoMusical: string;
};


export const CantanteCreateSchema = z.object({
  nombre: z.string().min(1, "Nombre requerido"),
  edad: z.number().int().min(0, "Edad inválida"),
  generoMusical: z.string().min(1, "Género musical requerido")
});

export const CantanteUpdateSchema = z.object({
  nombre: z.string().min(1).optional(),
  edad: z.number().int().min(0).optional(),
  generoMusical: z.string().min(1).optional()
});

export type CantanteCreateDTO = z.infer<typeof CantanteCreateSchema>;
export type CantanteUpdateDTO = z.infer<typeof CantanteUpdateSchema>;