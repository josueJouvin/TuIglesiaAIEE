  import { useForm } from "react-hook-form";
  import { useUserStore } from "../stores/auth.store";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useMemo } from "react";
  import { UpdateUser } from "../types";
  import { UpdateUserSchema } from "../schema/user.schema";

  export const useUpdateUserForm = () => {
    console.log("first")
      const user = useUserStore((state) => state.user);
      
      const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<UpdateUser>({
        resolver: zodResolver(UpdateUserSchema),
        defaultValues: useMemo(() => ({
          username: user?.username || '',
          email: user?.email || '',
          avatar: user?.avatar || ''
        }), [user]),
      });
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