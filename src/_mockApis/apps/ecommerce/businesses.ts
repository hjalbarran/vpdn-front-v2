import mock from '../../mockAdapter';

//Types
import type { Business } from '@/types/apps/EcommerceType';

// businesses items list
const businessesItems: Business[] = [
    {
        business_images_string: "https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/80/20/ee/1205071405.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0b/87/30/1205071319.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/6c/9a/9d/1205071315.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/8e/fd/e4/1205071364.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b4/7d/d8/1205071317.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b6/29/04/1205071367.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/64/94/56/1205071361.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/72/73/61/1205071368.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/32/a3/4d/1205071369.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/40/38/62/1205071370.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/76/b3/30/1205071230.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/db/dd/5c/1205071347.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/d4/62/fa/1205071372.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0d/a3/6f/1205071383.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b9/c7/a3/1205071375.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0a/db/32/1205071376.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/a2/c3/dc/1205071384.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/66/2b/1205071385.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/42/a6/6b/1205071386.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/cf/35/bb/1205071389.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/bd/d1/1205071390.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/16/fd/b9/1205071381.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/44/f8/88/1205071382.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/21/0c/f2/1205071318.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0c/98/d1/1205071392.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/32/34/be/1205071394.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/8e/82/e1/1205071366.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/60/b7/7b/1205071404.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/69/7b/94/1205071316.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/a9/2d/d5/1205071320.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/25/af/1218630918.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0b/87/30/1205071319.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/6c/9a/9d/1205071315.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/8e/fd/e4/1205071364.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b4/7d/d8/1205071317.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b6/29/04/1205071367.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/64/94/56/1205071361.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/72/73/61/1205071368.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/32/a3/4d/1205071369.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/40/38/62/1205071370.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/76/b3/30/1205071230.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/db/dd/5c/1205071347.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/d4/62/fa/1205071372.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0d/a3/6f/1205071383.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b9/c7/a3/1205071375.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0a/db/32/1205071376.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/a2/c3/dc/1205071384.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/66/2b/1205071385.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/42/a6/6b/1205071386.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/cf/35/bb/1205071389.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/bd/d1/1205071390.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/16/fd/b9/1205071381.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/44/f8/88/1205071382.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/21/0c/f2/1205071318.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0c/98/d1/1205071392.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/32/34/be/1205071394.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/8e/82/e1/1205071366.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/60/b7/7b/1205071404.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/69/7b/94/1205071316.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/a9/2d/d5/1205071320.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/25/af/1218630918.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/80/20/ee/1205071405.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0b/87/30/1205071319.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/6c/9a/9d/1205071315.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/8e/fd/e4/1205071364.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b4/7d/d8/1205071317.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b6/29/04/1205071367.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/64/94/56/1205071361.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/72/73/61/1205071368.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/32/a3/4d/1205071369.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/40/38/62/1205071370.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/76/b3/30/1205071230.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/db/dd/5c/1205071347.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/d4/62/fa/1205071372.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0d/a3/6f/1205071383.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/b9/c7/a3/1205071375.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0a/db/32/1205071376.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/a2/c3/dc/1205071384.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/66/2b/1205071385.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/42/a6/6b/1205071386.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/cf/35/bb/1205071389.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/bd/d1/1205071390.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/16/fd/b9/1205071381.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/44/f8/88/1205071382.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/21/0c/f2/1205071318.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/0c/98/d1/1205071392.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/32/34/be/1205071394.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/8e/82/e1/1205071366.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/60/b7/7b/1205071404.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/69/7b/94/1205071316.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/a9/2d/d5/1205071320.jpg;https://img4.idealista.com/blur/WEB_DETAIL/0/id.pro.es.image.master/14/25/af/1218630918.jpg;https://img4.idealista.com/blur/WEB_DETAIL_TOP/0/id.pro.es.image.master/80/20/ee/1205071405.jpg",
        business_videos_string: "https://st3v.idealista.com/3f/e2/90/hd_1217819273.mp4",
        created_at_business: "2023-03-06 23:55:58",
        favorite: 0,
        flag_outstanding: 0,
        id_autonomous_community: 14,
        id_business_type: 1,
        id_business: 4450,
        id_code_business: 7433,
        id_district: 10,
        id_municipality: 79,
        id_neighborhood: 62,
        id_province: 31,
        investment_business: 7800000,
        lat_business: "40.3874950782",
        lng_business: "-3.7618485335926",
        name_autonomous_community: "Comunidad de Madrid",
        name_business_type: "Traspasos y Fondos de comercio",
        name_business: "Bar restaudante en Canillejas (madrid)",
        name_district: "Latina",
        name_municipality: "Madrid",
        name_neighborhood: "Aluche",
        name_province: "Madrid",
        recommendation_finished_at: null,
        recommended: 0,
        rental: 102000,
        sector_ids: "1,3",
        sector: "Bar,Restaurantes",
        sold: 0,
        source_platform: "Belbex",
        times_viewed_business: 1,
        updated_at_business: "2023-10-26 08:00:18",
        bathrooms: null,
        courtyard: null,
        elevator: null,
        floor: null,
        floors: null,
        garage: null,
        new_or_used: null,
        pool: null,
        rooms: null,
        size_business: 0,
        storage: null,
        year_built: null
    },
    {
        bathrooms: null,
        business_images_string: "https://static.fotocasa.es/images/anuncio/2024/06/22/183653055/3914226172.jpg?rule=original;https://static.fotocasa.es/images/anuncio/2024/06/22/183653055/3914226489.jpg?rule=original;https://static.fotocasa.es/images/anuncio/2024/06/22/183653055/3914226840.jpg?rule=original;https://static.fotocasa.es/images/anuncio/2024/06/22/183653055/3914227301.jpg?rule=original;https://static.fotocasa.es/images/anuncio/2024/06/22/183653055/3914227550.jpg?rule=original;https://static.fotocasa.es/images/anuncio/2024/06/22/183653055/3914228184.jpg?rule=original;https://static.fotocasa.es/images/anuncio/2024/06/22/183653055/3914228953.jpg?rule=original",
        business_videos_string: null,
        courtyard: null,
        created_at_business: "2024-07-02 14:52:11",
        elevator: null,
        favorite: 0,
        flag_outstanding: 0,
        floor: null,
        floors: null,
        garage: null,
        id_autonomous_community: 2,
        id_business_type: 1,
        id_business: 135540,
        id_code_business: 48167,
        id_district: 508,
        id_municipality: 229,
        id_neighborhood: 901,
        id_province: 50,
        investment_business: 1,
        lat_business: "41.66653",
        lng_business: "-0.8870479",
        name_autonomous_community: "Arag\\u00f3n",
        name_business_type: "Traspasos y Fondos de comercio",
        name_business: "Restaurant en Calle de Gertrudis G\\u00f3mez de Avellaneda, 22,  Zaragoza Capital",
        name_district: "Actur-Rey Fernando",
        name_municipality: "Zaragoza",
        name_neighborhood: "Grancasa",
        name_province: "Zaragoza",
        new_or_used: "Usado",
        pool: null,
        recommendation_finished_at: null,
        recommended: 0,
        rental: null,
        rooms: null,
        sector_ids: "3",
        sector: "Restaurantes",
        size_business: 200,
        sold: 0,
        source_platform: "Fotocasa",
        storage: null,
        times_viewed_business: 0,
        updated_at_business: "2024-07-02 14:52:11",
        year_built: "5 a 10 a\\u00f1os",
    }
];

// ==============================|| MOCK SERVICES ||============================== //

mock.onGet('/business/index?business_type_id=1&order_by=most_relevant&page=1&perPage=12&add_timeline=1').reply(() => {
    return [200, {
        status: 'success',
        total: 15473,
        page: '1',
        items: 12,
        businesses: businessesItems
    }];
});

export default businessesItems;