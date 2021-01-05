<template>
  <div class="d-flex">
    <div class="ml-n5" @click="scrollLeft" ref="left_arrow">
      <v-img class="mt-16" src="../assets/arrow_backward.svg" />
    </div>
    <v-row class="list-container overflow-y-auto ml-2 mr-2" ref="accountsList" id="accounts_list">
      <v-col>
        <div class="d-flex">
            <div v-for="(account, i) in accountData" :key="i" id="details">
                <v-card class="element mr-16" elevation="2" @click="cardClick" max-width="200">
                  <v-img
                    :src="'http://localhost:3000/images/' + account.image"
                    height="100"
                    class="align-xl-content-stretch"
                    contain
                  />
                <savings-details :type="account.type" :roi="account.ROI" :transaction="account.transaction"/>
                <fixed-deposits-details :type="account.type" :roi="account.ROI" :amount="account.amount" :term="account.term"/>
              <v-btn class="mt-n2 mb-1" @click.stop="btnClick" @mousedown.stop :small="true" plain>
                <v-icon class="ml-2 mr-2" :small="true">
                  mdi-arrow-right-drop-circle
                </v-icon>
                Apply now
              </v-btn>
              </v-card>
            </div>
        </div>
      </v-col>
    </v-row>
    <div class="mr-5" @click="scrollRight" ref="right_arrow">
      <v-img class="mt-16" src="../assets/arrow_forward.svg" />
    </div>
  </div>
</template>

<script>
import FixedDepositsDetails from './FixedDepositsDetails.vue';
import SavingsDetails from './SavingsDetails.vue';
export default {
  components: { SavingsDetails, FixedDepositsDetails },
    props: ['accountData'],
    methods: {
        scrollLeft() {
            const wrapper = this.$refs.accountsList;
            let scrollAmount = 400;
            var slideTimer = setInterval(function() {
                wrapper.scrollLeft -= 10;
                scrollAmount -= 10;
                if (scrollAmount <= 0) {
                window.clearInterval(slideTimer);
                }
            }, 15);
        },
        scrollRight() {
            const wrapper = this.$refs.accountsList;
            let scrollAmount = 0;
            var slideTimer = setInterval(function() {
                wrapper.scrollLeft += 10;
                scrollAmount += 10;
                if (scrollAmount >= 400) {
                window.clearInterval(slideTimer);
                }
            }, 15);
        },
        checkTotalAccounts() {
            const acc = Object.keys(this.accountData).length;
            console.log(acc);
            if (acc <= 4) {
                this.$refs.left_arrow.style.display = "none";
                this.$refs.right_arrow.style.display = "none";
            }
        },
        cardClick()
        {
            console.log("Hello");
        },
        btnClick()
        {
          
        }
    },
    updated() {
        this.checkTotalAccounts();
    }
};
</script>

<style>
.list-container::-webkit-scrollbar {
  display: none;
  scroll-behavior: smooth;
}
</style>