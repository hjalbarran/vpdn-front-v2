<script setup lang="ts">
import { ref } from 'vue';
import { VideoIcon, EyeIcon, Message2Icon, CircleIcon, Map2Icon, BuildingSkyscraperIcon } from "vue-tabler-icons";
const props = defineProps({
    desc: String,
    goto: Number || String || Object || Array,
    id: {
        type: Number || String,
        required: true,
    },
    image: String,
    investmentBusiness: {
        type: Number,
        required: false,
        default: ''
    },
    name_district: {
        type: String,
        required: false,
        default: ''
    },
    name_neighborhood: {
        type: String,
        required: false,
        default: ''
    },
    name_province: {
        type: String,
        required: false,
        default: ''
    },
    name: String,
    offerPrice: Number,
    rating: Number,
    sector: {
        type: String,
        required: false,
        default: ''
    },
    sourcePlatform: {
        type: String,
        required: false,
        default: ''
    },

});
const successsnackbar = ref(false);
const rate = ref(props.rating);
const formatNumber = (value: number) => {
    return new Intl.NumberFormat().format(value);
}
</script>

<template>
    <v-card variant="outlined" elevation="10" color="#033" class="rounded card-hover overflow-hidden bg-vpLigthYellow">
        <router-link :to="`/ecommerce/product/detail/€{goto}`">
            <v-img alt="product" :src="image" class="w-100" cover aspect-ratio="1.7778" />
        </router-link>
        <div class="d-flex justify-end mr-3 mt-n6">
            <v-tooltip text="Video disponible" location="start">
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props" color="primary" class="ml-auto" size="x-small"
                        @click="$emit('handlecart', (successsnackbar = true))">
                        <VideoIcon size="18" />
                    </v-btn>
                </template>
            </v-tooltip>
        </div>
        <!-- <v-card-item class="pt-1" :title="name" :subtitle="id" style="padding: 8px;">

            <v-chip class="text-body-2 font-weight-medium bg-grey100 text-decoration-none" size="small" v-text="'hola'"></v-chip>

            <h6 class="text-h6 text-truncate">{{ name }}</h6>

            <div class="d-flex align-center justify-space-between mt-1">
                <div class="d-flex align-center gap-2">
                    <h6 class="text-h6">€{{ investmentBusiness }}</h6>
                    <p class="text-decoration-line-through text-medium-emphasis">€{{ offerPrice }}</p>
                </div>
                <v-rating color="warning" half-increments size="small" v-model="rate" density="compact"> </v-rating>
            </div>
        </v-card-item> -->
        <v-card-item class="pt-1" style="padding: 8px;">
            <div class="d-flex align-center justify-space-between mb-2">
                <v-chip class="text-body-2 font-weight-medium bg-primary text-decoration-none" size="small"
                    v-text="`ID: ${id}`"></v-chip>
                <div class="d-flex align-center gap-2">
                    <h6 class="text-h6 font-weight-bold">€{{ formatNumber(investmentBusiness) }}</h6>
                </div>
            </div>

            <h6 class="text-h6 text-truncate" :title="name" v-text="name"></h6>

            <div class="text-truncate">
                <v-avatar class="" size="18">
                    <Map2Icon size="18" />
                </v-avatar>
                <span class="text-subtitle-2 ml-1" :title="name_province">
                    {{ `${name_neighborhood ? name_neighborhood + ' ' + '-' + ' ' : ''}` }}
                    {{ `${name_district ? name_district + ',' + ' ' : ''}` }} {{ name_province }}
                </span>
            </div>

            <div class="text-truncate">
                <v-avatar class="" size="18">
                    <BuildingSkyscraperIcon size="18" />
                </v-avatar>
                <span class="text-subtitle-2 ml-1" :title="sector" v-text="sector"></span>
            </div>

            <div class="d-flex align-center justify-space-between mt-1">
                <div class="d-flex align-center gap-2">
                    <h6 class="text-h6">€{{ formatNumber(investmentBusiness) }}</h6>
                    <p class="text-decoration-line-through text-medium-emphasis">€{{ offerPrice }}</p>
                </div>
                <v-rating color="warning" half-increments size="small" v-model="rate" density="compact"> </v-rating>
            </div>
        </v-card-item>
        <v-snackbar variant="flat" location="bottom right" color="success" rounded="md" class="text-white"
            v-model="successsnackbar">
            Item Added to The Cart
        </v-snackbar>
        <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
    </v-card>
</template>
<style>
.descriptionH {
    height: 40px;
    overflow: hidden;
}

.text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
