import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export function useUser() {
  const store = useUserStore()

  const {
    userImages,
    userData, 
    userRoles,
    } = storeToRefs(store)
    
    const business_type_id: number = ref(0)

    const filteredObj = reactive({
        business_type_id: businessTypeFilter,
        id_code: searchID,
        min_investment: minInvestmentFilter,
        max_investment: maxInvestmentFilter,
        min_rental: minRentalFilter,
        max_rental: maxRentalFilter,
        name: search,
        province_id: provinceFilter,
        order_by: orderBySelected.value,
        neighborhood: neigborhoodName,
        sectors:
          businessSectorFilter.length === 0
            ? null
            : businessSectorFilter.toString(),
        my_favorite: 0,
        condition:
          $route.name === 'negocios-analisis'
            ? 'with_analysis'
            : $route.name === 'mystery-options'
            ? 'mistery_option'
            : $route.name === 'listado-franquicias'
            ? 'franchise'
            :'',
        only_with_gcs: currentItemView === 'map-pin-view' ? 1 : 0,
        flag_smoke_outlet: flag_smoke_outlet,
        flag_terrace: flag_terrace,
        flag_recent: flag_recent,
        flag_outstanding: flag_outstanding,
        page: currentPage,
        perPage: pageSize,
        add_timeline: 1
      })

 
  return {
    userImages,
    userData,
    userRoles,
    getUserImages: store.fetchUserImages,
    getUserData: store.fetchUserData
  }
}