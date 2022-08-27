<template>
    <div class="main-container">
    <div class="admin-container">
      <div class="admin-container-banner">
        <img :src="require(`@/assets/seller-profile-img.jpeg`)" alt="Seller Image">
        <div class="seller-header">Seller Ref ID: {{userId}}</div>
      </div>
      <div class="admin-display-container">
        <div class="seller-details">
            <h3 class="stats-header">Current Statistics for Seller : {{seller.name? seller.name : 'Default Seller'}}</h3>
            <div class="seller-name">
                <div class="name-tag">Seller Name: </div>
                <div class="name-value">{{seller.name? seller.name : "Default Seller Name"}}</div>
            </div>
           
            <br>
            Seller Email: {{seller.emailId? seller.emailId : "default@gmail.com"}}
            <br>
            Select Contact: {{seller.contact? seller.contact : '9988776655'}}
            <br>
            Seller Address: {{seller.address? seller-address : 'Caledon Square, Avinashi Road, Coimbatore - 641004'}}
            <br>
            <span class="seller-profit">{{seller.profit? seller.profit : 'Current Projected Profit based on Inventory Status: $7534'}}</span>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
// import { mapGetters } from 'vuex'
export default{
    name: 'ViewSellerComponent',
    data(){
        return {
            userId: this.$route.params.userId,
            seller: {}
        }
    },
    created(){
        this.$store.dispatch('GET_SELLER_BY_ID', {
            success: (response)=>{
                this.seller = response.data;
                console.log(response.data);
                console.log(this.seller);
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
.seller-name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.stats-header{
    color: gray;
}
.stats-header:hover{
    cursor: pointer;
    color: black;
    text-decoration: underline;
}
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
    max-width: 10%;
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
    height: 40vh;
    max-width: 94%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.seller-details{
    background-color: white;
    border-radius: 1em;
    padding: 1em;
    width: 50%
}

.seller-profit{
    font-size: small;
}
</style>