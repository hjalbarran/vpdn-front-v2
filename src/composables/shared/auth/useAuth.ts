import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

export function useUser() {
    const store = useAuthStore();

    const { user } = storeToRefs(store);

    return {
        user
    };
}
