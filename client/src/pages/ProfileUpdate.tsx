import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, Fieldset, Input, Label, Legend } from "@headlessui/react";
import { UpdateUserSchema} from "../schema/user.schema";
import { useUserStore } from "../stores/auth.store";
import { UpdateUser } from "../types";
import { toast } from 'react-toastify';

import Error from "../components/Error";
import apiRequest from '../utils/apiRequest';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const navigate = useNavigate()
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUser>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      username: user?.username || '',
      email: user?.email || '',
      avatar: user?.avatar || ""
    },
  });

  async function handleSubmitUpdate(data: UpdateUser) {
    if (data.username === user?.username && data.email === user?.email && !data.currentPassword && !data.newPassword) {
      toast.info("No hay cambios en el perfil");
      return;
    }
    try {
      const dataToSend: Partial<UpdateUser> = {
        username: data.username,
        email: data.email
      };

      if (data.currentPassword && data.newPassword) {
        dataToSend.currentPassword = data.currentPassword;
        dataToSend.newPassword = data.newPassword;
      }

      const res = await apiRequest.put(`/users/${user?.id}`, dataToSend);
      setUser(res.data.data);
      toast.success(res.data.message);
      reset()
      navigate("/perfil")
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error en la actualización");
      }
    }
  }

  return (
    <>
      <section className="flex-3 h-full flex items-center justify-center">
        <form className="w-full md:w-3/4 lg:w-1/2" onSubmit={handleSubmit(handleSubmitUpdate)}>
          <Fieldset className="flex flex-col gap-5">
            <Legend className="font-bold text-3xl">Actualizar Perfil</Legend>
            <Field className="flex flex-col gap-1">
              <Label className="text-blue-500 text-xs font-semibold relative top-2 ml-2 px-1 bg-white w-fit">
                Nombre de Usuario
              </Label>
              <Input
                type="text"
                className="p-5 border-2 boder-solid border-blue-500 rounded-md focus:outline-blue-600"
                placeholder={user?.username}
                {...register("username")}
              />
              {errors.username && <Error>{errors.username.message}</Error>}
            </Field>
            <Field className="flex flex-col gap-1">
              <Label className="text-blue-500 text-xs font-semibold relative top-2 ml-2 px-1 bg-white w-fit">
                Correo
              </Label>
              <Input
                type="email"
                className="p-5 border-2 boder-solid border-blue-500 rounded-md focus:outline-blue-600"
                placeholder={user?.email}
                {...register("email")}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </Field>
            <Field className="flex flex-col gap-1">
              <Label className="text-blue-500 text-xs font-semibold relative top-2 ml-2 px-1 bg-white w-fit">
                Contraseña Actual
              </Label>
              <Input
                type="password"
                className="p-5 border-2 boder-solid border-blue-500 rounded-md focus:outline-blue-600"
                placeholder="Contraseña Actual"
                {...register("currentPassword")}
              />
              {errors.currentPassword && <Error>{errors.currentPassword.message}</Error>}
            </Field>
            <Field className="flex flex-col gap-1">
              <Label className="text-blue-500 text-xs font-semibold relative top-2 ml-2 px-1 bg-white w-fit">
                Contraseña Nueva
              </Label>
              <Input
                type="password"
                className="p-5 border-2 boder-solid border-blue-500 rounded-md focus:outline-blue-600"
                placeholder="Contraseña Nueva"
                {...register("newPassword")}
              />
              {errors.newPassword && <Error>{errors.newPassword.message}</Error>}
            </Field>
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
              Actualizar Perfil
            </button>
          </Fieldset>
        </form>
      </section>
      <section className="hidden md:flex-2 md:bg-blue-200/75 md:flex md:items-center md:justify-center overflow-clip">
        <img src={user?.avatar || "/noavatar.jpg"} alt="" className="w-1/2" />
      </section>
    </>
  );
};

export default ProfileUpdate;