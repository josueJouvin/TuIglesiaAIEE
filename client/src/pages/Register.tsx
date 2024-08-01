import {Field, Fieldset, Input, Label, Legend} from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { user } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../schema/user.schema";
import { toast } from "react-toastify";

import AuthButton from "../components/AuthButton";
import Error from "../components/Error";
import axios from "axios";
import apiRequest from "../utils/apiRequest";

const Register = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, reset, formState:{ errors }} = useForm<user>({resolver: zodResolver(UserSchema)})

  async function userRegistration(data: user) {
    try {
      const res = await apiRequest.post("/auth/register", data)
      toast.success(res.data.message)
      navigate("/login")
      reset()
    } catch (error) {
      // Manejar errores específicos de Axios
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        // Manejar otros tipos de errores
        toast.error("Error en el registro");
      }
    }
  }

  return (
    <>
      <section className="flex-3 h-full flex items-center justify-center">
        <form onSubmit={handleSubmit(userRegistration)} className="w-full md:w-3/4 lg:w-1/2 ">
          <Fieldset className="flex flex-col gap-5">
            <Legend className="font-bold text-3xl">Crea una Cuenta</Legend>
            <Field className="flex flex-col gap-1">
              <Label className="text-blue-500 text-xs font-semibold relative top-2 ml-2 px-1 bg-white w-fit">Usuario</Label>
              <Input type="text" className="p-5 border-2 boder-solid border-blue-500 rounded-md focus:outline-blue-600" placeholder="Tu Usuario" {...register("username",{required:"Nombre de usuario obligatorio"})} />
            </Field>
            {errors.username && <Error>{errors.username?.message}</Error>}
            <Field className="flex flex-col gap-1">
              <Label className="text-blue-500 text-xs font-semibold relative top-2 ml-2 px-1 bg-white w-fit">Correo</Label>
              <Input type="email" className="p-5 border-2 boder-solid border-blue-500 rounded-md focus:outline-blue-600"  placeholder="correo@correo.com" {...register("email",{required: "El correo es obligatorio"})} />
            </Field>
            {errors.email && <Error>{errors.email?.message}</Error>}
            <Field className="flex flex-col gap-1">
            <Label className="text-blue-500 text-xs font-semibold relative top-2 ml-2 px-1 bg-white w-fit">Contraseña</Label>
              <Input type="password" className="p-5 border-2 boder-solid border-blue-500 rounded-md focus:outline-blue-600" placeholder="Contraseña" {...register("password",{required:"La contraseña es obligatiora"})} />
            </Field>
            {errors.password && <Error>{errors.password?.message}</Error>}
            <AuthButton text="Registrar"/>
            <Link className="text-xs text-gray-700 border-b border-solid border-gray-700 w-fit mt-2" to="/login">¿Ya tienes una cuenta?</Link>
          </Fieldset>
        </form>
      </section>
      <section className="hidden lg:flex-2 lg:bg-blue-200/75 lg:flex lg:items-center lg:justify-center overflow-clip">
      <img
          src="/bg-home.png"
          alt=""
          className="w-full"
        />
      </section>
    </>
  );
};

export default Register;
