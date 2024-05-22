import { defineStore } from 'pinia';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userAvatar: {} as Avatar,
        returnUrl: String
    }),
    actions: {
        async fetchUserImageCorner() {
            // const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
            const imageAvatar = await fetchWrapper.get('/user/image-profile');
            // update pinia state
            this.userAvatar = imageAvatar.data;

        },
        async fetchUserData() {
            // const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
            const imageAvatar = await fetchWrapper.get('/user/image-profile');
            // update pinia state
            this.userAvatar = imageAvatar.data;

        },
    }
});

interface Avatar {
    avatar_profile_image: string
    original_profile_image: number
    status: string,
    thumbnail_profile_image: string
  }
