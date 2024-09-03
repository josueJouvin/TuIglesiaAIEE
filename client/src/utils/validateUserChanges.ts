import { UpdateUser} from "../types"; // Asegúrate de importar los tipos correctos

export const validateUserChanges = (data: UpdateUser, user: any) => {
    return data.username !== user?.username || 
    data.email !== user?.email || 
    data.currentPassword || 
    data.newPassword || 
    data.avatar !== user?.avatar;
};