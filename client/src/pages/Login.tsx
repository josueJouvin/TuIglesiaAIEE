import { Field, Fieldset, Input, Label, Legend} from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema } from "../schema/user.schema";
import { userLogin } from "../types";
import Error from "../components/Error";
import apiRequest from "../utils/apiRequest";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, reset, formState:{ errors }} = useForm<userLogin>({resolver: zodResolver(UserLoginSchema)})

  async function userLogin(data: userLogin) {
    try {
      const response = await apiRequest.post("/auth/login", data)
      localStorage.setItem("user", JSON.stringify(response.data.data))
      toast.success(response.data.message)
      reset()
      navigate("/")
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
        <form onSubmit={handleSubmit(userLogin)} className="w-full md:w-3/4 lg:w-1/2">
          <Fieldset className="flex flex-col gap-5">
            <Legend className="font-bold text-3xl">Bienvenido</Legend>
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
            <AuthButton text="Iniciar sesión"/>
            <Link className="text-xs text-gray-700 border-b border-solid border-gray-700 w-fit mt-2" to="/register">¿No tienes una cuenta?</Link>
          </Fieldset>
        </form>
      </section>
      <section className="hidden md:flex-2 md:bg-blue-200/75 md:flex md:items-center md:justify-center overflow-clip">
      <img
          src="/bg-home.png"
          alt=""
          className="w-full"
        />
      </section>
    </>
  );
};

export default Login;
