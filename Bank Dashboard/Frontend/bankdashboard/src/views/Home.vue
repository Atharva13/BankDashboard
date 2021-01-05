<template>
  <v-container class="mt-1">
    <p class="ml-6" style="font-size:125%;">
      Savings Account
    </p>
    <List :accountData="savings"/>

    <p class="mt-4 ml-6" style="font-size:125%;">
      Fixed Deposits
    </p>
    <List :accountData="fixeddeposits"/>
  </v-container>
</template>

<script>
import List from '../components/List.vue';

async function fetchData() {
  const url = "http://localhost:3000/";

  const response = await fetch(url, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const commits = await response.json();
  return commits;
}
export default {
  name: "Lists",
  components: {
    List
  },
  data: () => ({
    savings: [],
    fixeddeposits: []
  }),
  methods: {
    async fetchAccounts() {
      const accounts = await fetchData();
      this.savings = accounts["savings"];
      this.fixeddeposits = accounts["fixeddeposits"];
    }
  },
  mounted() {
    this.fetchAccounts();
  }
};
</script>