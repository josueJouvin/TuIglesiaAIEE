import { toast } from "react-toastify";
import ActionButton from "../components/ActionButton";
import Chat from "../components/Chat";
import ChurchListings from "../components/ChurchListings";
import apiRequest from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  async function logout() {
    try{
      const response = await apiRequest.post("/auth/logout")
      localStorage.removeItem("user")
      toast.success(response.data.message)
      navigate("/")
    }catch(err){
      console.log(err)
      toast.error("Hubo un problema al cerrar sesión. Inténtalo de nuevo.");
    }
  }
  return (
    <>
      <section className="pb-12 h-max lg:h-auto lg:flex-3 lg:overflow-y-scroll">
        <div className="flex flex-col gap-12 lg:pr-[50px]">
          <div className="flex items-center justify-between xl:mt-1">
            <h1 className="font-light text-3xl">Informacion de Usuario</h1>
            <ActionButton text="Actualizar Perfil" />
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-5">
              Icono:{" "}
              <img
                className="size-10 rounded-[50%] object-cover"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span className="flex items-center gap-5">
              Nombre de usuario: <b>Josue Garces</b>
            </span>
            <span className="flex items-center gap-5">
              E-mail: <b>josuegj2001@gmail.com</b>
            </span>
            <button className="bg-red-500 hover:bg-red-700 transition-all py-3 px-5  w-fit text-white font-bold rounded-md" onClick={logout}>Cerrar sesión</button>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-light text-3xl">Publicaciones</p>
            <ActionButton text="Nuevo Post" />
          </div>
          <ChurchListings />
          <div className="flex items-center justify-between">
            <p className="font-light text-3xl">Guardados</p>
          </div>
          <ChurchListings />
        </div>
      </section>
      <section className="bg-blue-200/75 h-full lg:flex-2">
        <div className="px-5 h-full">
            <Chat/>
        </div>
      </section>
    </>
  );
};

export default Profile;
