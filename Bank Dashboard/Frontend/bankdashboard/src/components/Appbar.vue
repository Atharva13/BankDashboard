<template>
  <v-app-bar app color="#D9D3F5" height="60">
    <v-img
      alt="Finastra Logo"
      src="../assets/Finastra_bank_logo_1.png"
      contain
      max-height="60"
      max-width="120"
    />
    <v-spacer />
    <v-btn text class="text-capitalize">
      About Us
    </v-btn>
    <v-btn text class="text-capitalize">
      Products
    </v-btn>
    <v-btn text class="text-capitalize">
      Newsroom
    </v-btn>
    <v-btn text class="text-capitalize">
      Contact Us
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
