import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';
import { toast, type ToastOptions } from 'vue3-toastify';
// import { useI18n } from "vue-i18n";

// const baseUrl = `${import.meta.env.VITE_API_URL}/users`;
// const { t } = useI18n();

export const useAuthStore = defineStore({
    
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        user: JSON.parse(localStorage.getItem('userInfo')),
    }),
    actions: {
        async login(email: string, password: string) {
            // const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
            const user = await fetchWrapper.post('/auth/login', { email, password });

            // update pinia state
            this.user = user;
            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('userInfo', JSON.stringify(user));
            // redirect to previous url or default to home page
            router.push('/');
        },
        async logout() {
            const logout = await fetchWrapper.post('/auth/logout');
            this.user = null;
            localStorage.removeItem('userInfo');

            toast('Cierre de sesión exitoso', {
                autoClose: 3000,
                type: 'success',
                theme: 'colored',
                position: toast.POSITION.BOTTOM_RIGHT,
                clearOnUrlChange: false,
            } as ToastOptions);

            router.push('/auth/login');
        }
    }
});
