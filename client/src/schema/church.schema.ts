import z from "zod";

const DAYS_OF_WEEK = [
  "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"
] as const;

const CHURCH_SERVICES = [
  "culto-dominical", "estudio-biblico", "grupo-jovenes", 
  "escuela-dominical", "oracion", "alabanza", 
  "ministerio-ninos", "alcance-comunitario", "grupo-mujeres", 
  "grupo-hombres"
] as const;


export const PostChurchSchema = z.object({
  title: z.string()
    .min(1, { message: "El nombre de la iglesia es obligatorio" })
    .max(100, { message: "El nombre de la iglesia no debe exceder 100 caracteres" }),

  address: z.string(),

  province: z.string()
    .min(3, { message: "La provincia debe tener al menos 3 caracteres" })
    .max(50, { message: "La provincia no debe exceder los 50 caracteres" }),

  city: z.string()
    .min(3, { message: "La ciudad debe tener al menos 3 caracteres" })
    .max(50, { message: "La ciudad no debe exceder los 50 caracteres" }),

  socialMediaLink: z.string().optional()
    .refine((value) => !value || z.string().url().safeParse(value).success, {
      message: "Formato de enlace no válido",
    }),

  churchPastor: z.string()
    .min(3, { message: "El nombre del pastor debe tener al menos 3 caracteres" })
    .max(100, { message: "El nombre del pastor no debe exceder los 100 caracteres" }),

  mainWorship: z.object({
    label: z.string().min(1, { message: "El campo label es obligatorio" }),
    value: z.enum(DAYS_OF_WEEK, { message: "El día seleccionado no es válido" }),
  }),

  mainServiceTime: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
    message: "El horario principal debe estar en formato HH:MM"
  }),

  foundation: z.string().min(1, { message: "Fecha de fundación requerida" }),

  servicesTimes: z.string().optional(),

  servicesDays: z.array(
    z.object({
      value: z.enum(DAYS_OF_WEEK, { message: "Día del servicio no válido" }),
      label: z.string().min(1, { message: "El campo label es obligatorio" }),
    })
  ).nonempty({ message: "Debes seleccionar al menos un día de servicio" }), 

  servicesTypes: z.array(
    z.object({
      value: z.enum(CHURCH_SERVICES, { message: "Tipo de servicio no válido" }),
      label: z.string().min(1, { message: "El campo label es obligatorio" }),
    })
  ).nonempty({ message: "Debes seleccionar al menos un tipo de servicio" }),

  parking: z.boolean(),

  description: z.string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(1000, { message: "La descripción no debe exceder los 1000 caracteres" })
});
