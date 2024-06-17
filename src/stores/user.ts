import { defineStore } from 'pinia';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userImages: {} as Avatar,
        userData: {} as userData,
        userRoles: [],
    }),
    actions: {
        async fetchUserImages() {
            const imageAvatar = await fetchWrapper.get('/user/image-profile');
            this.userImages = imageAvatar.data;
        },
        async fetchUserData() {
            const data = await fetchWrapper.get('/auth/user');
            this.userData = data.data.data;
            this.userRoles = data.data.roles;
        }
    }
});

interface Avatar {
    avatar_profile_image: string;
    original_profile_image: number;
    status: string;
    thumbnail_profile_image: string;
}
interface userData {
    id: number;
    email: string;
    name: string;
    surname: string;
    employee_id: number;
}

interface UserRolesArray {
    id_role: number;
    name_role: string;
    slug_role: string;
}
