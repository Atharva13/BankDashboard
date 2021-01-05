<template>
    <div v-if="!!visibility()">
        <v-card-title class="mt-n1" style="font-size:87.5%;">{{type}}</v-card-title>
        <div class="d-flex">
        <v-icon class="mt-n8 ml-4">
            mdi-cash
        </v-icon>
        <v-card-text class="mt-n8" style="font-size:87.5%;">
            ROI - {{roi}} %
        </v-card-text>
        </div>
        <div class="d-flex">
        <v-icon class="mt-n8 ml-4">
                mdi-bank-transfer
        </v-icon>
        <v-card-text class="mt-n6" style="font-size:87.5%;">
        Max Transaction/ day {{transaction}} GBP
        </v-card-text>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type','roi','transaction'],
    methods: {
        visibility() {
            if(this.transaction === undefined)
            {
                return false;
            }
            return true;
        }
    }
}
</script>