  import { useForm } from "react-hook-form";
  import { useUserStore } from "../stores/auth.store";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useEffect, useMemo } from "react";
  import { UpdateUser } from "../types";
  import { UpdateUserSchema } from "../schema/user.schema";

  export const useUpdateUserForm = () => {
      const user = useUserStore((state) => state.user);
      
      const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<UpdateUser>({
        resolver: zodResolver(UpdateUserSchema),
        defaultValues: useMemo(() => ({
          username: user?.username || '',
          email: user?.email || '',
        }), [user]),
      });

      useEffect(() => {
        if(user?.avatar){
          setValue("avatar", user?.avatar)
        }
      },[setValue, user])
      
      const avatar = watch("avatar");
      const handleImageChange = (newAvatarUrl: string) => {
        setValue("avatar", newAvatarUrl); 
      };
    
      return {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        errors,
        avatar,
        handleImageChange
      };
    };