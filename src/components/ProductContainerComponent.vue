<template>
  <div class="containers">
    <SellerProductsComponent v-for="(data,index) in sellerproductlist" :key="index" :product="data"/> 
  </div>
</template>

<script>
import SellerProductsComponent from  './SellerProductComponent.vue'
import { mapGetters } from 'vuex';
export default {
   components:
   {
       SellerProductsComponent,
   },

  computed:
  {
      ...mapGetters({
        sellerproductlist:'getSellerproducts'
      })
  },

  created()
  {
    this.$store.dispatch('getsellerproductsfromservice','QB12')
  },


}
</script>

<style scoped>

.containers
{   
    margin-top:125px;
    margin-bottom:75px;
    margin-left:70px;
    margin-right:70px; 
     /* width:900px; */
    height:600px;
    display:flex;
    flex-wrap:wrap;
    padding:40px;
    background-color:#f9f9f9;
    border-radius:20px;
    /* flex-direction: ; */
    overflow-y:scroll;
    /* overflow-x:fixed; */
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>