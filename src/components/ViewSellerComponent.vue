<template>
    <div class="main-container">
    <div class="admin-container">
      <div class="admin-container-banner">
        <img :src="require(`@/assets/seller-profile-img.jpeg`)" alt="Seller Image">
        <div class="seller-header">Seller Ref ID: {{userId}}</div>
      </div>
      <div class="admin-display-container">
        <p>{{seller.name? "Default Seller Name" : seller.name }} | {{seller.emailId? "default@gmail.com" : seller.emailId}}</p>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex'
export default{
    name: 'ViewSellerComponent',
    data(){
        return {
            userId: this.$route.params.userId
        }
    },
    computed:{
        ...mapGetters({
            seller: 'getSpecificSeller'
        })
    },
    created(){
        this.$store.dispatch('GET_SELLER_BY_ID', {
            success: (response)=>{
                this.seller = response.data;
                console.log(response.data);
            },
            error : (err)=>{
                console.warn('Could not fetch the specific seller : ', this.userId);
                console.warn(err);
            },
            userId: this.userId
        });
    }
}

</script>
<style scoped>
.main-container {
    background-color: whitesmoke;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    padding-top: 1em;
    overflow: scroll;
    flex-wrap: nowrap;
    align-items: center;
}
.admin-container-banner {
  max-width: 95%;
    height: 20vh;
    margin: 2em;
    background: whitesmoke;
    border: none;
    border-radius: 1em;
    box-shadow: 2px 2px 10px #f9f9f9;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: large;
    color: gray;
    
}
.admin-container-banner:hover {
  cursor: pointer;
  color: black;
}
.admin-container-banner img {
    max-width: 15%;
    border-radius: 20em;
    border: 2px solid gray;
}
.seller-header{
    margin: 1em;
}
.admin-container {
  height: 80vh;
  width: 90vw;
  background-color: white;
  border: none;
  border-radius: 1em;
  overflow: scroll;
}
.admin-display-container {
  background: #f9f9f9;
  border-radius: 1em;
  margin: 1em 2em; 
  height: 20vh;
  max-width: 94%;
}
</style>