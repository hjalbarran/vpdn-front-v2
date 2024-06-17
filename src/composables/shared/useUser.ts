import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export function useUser() {
  const store = useUserStore()

  const {
    userImages,
    userData, 
    userRoles,
  } = storeToRefs(store)

 
  return {
    userImages,
    userData,
    userRoles,
    getUserImages: store.fetchUserImages,
    getUserData: store.fetchUserData
  }
}