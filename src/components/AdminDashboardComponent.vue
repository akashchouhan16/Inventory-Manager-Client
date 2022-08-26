<template>
    <div class="main-container">
        <div class="admin-container">
            <div class="option-bar">
                <input type="search" name="search-bar" v-model="searchKey" class="search-bar" placeholder="search"/>
                <ion-icon name="search-sharp" @click="processSearch()"></ion-icon>
                <button name="create-seller" class="create-seller-btn">Create Seller</button>
            </div>
            <div class="admin-display-container">
                <div class="grid-container">    
                    <SellerCardComponent v-for="(data, index) in 5" :key="index"></SellerCardComponent>
                </div>
            </div>
        </div>
    </div>

</template>


<script src="./scripts/AdminDashboardComponent.js">
</script>

<style scoped>
.main-container{
    background-color: whitesmoke;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: column;
    justify-content: center;
    align-content: center;
    padding-top: 1em;
    overflow: scroll;
}
.admin-container{
    height: 70vh;
    width: 80vw;
    background-color: white;
    border: none;
    border-radius: 1em;
}

.admin-container .option-bar {
    margin: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.3m;
    background-color: white;
    border-radius: 0.7em;
    /* border: 2px solid #f9f9f9 */
}
.admin-container .option-bar ion-icon {
    margin: 0.2em 0.2em;
    padding: 0.3em 0.7em;
    font-size: large;
    background-color: #01c5a1;
    color: white;
    border-radius: 0.5em;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.admin-container .search-bar {
  border: none;
  padding: 0.5em;
  width: 50vw;
  border-radius: 0.5em !important;
  border: 2px solid #f9f9f9;
  columns: #f2f2f2;
  color: rgb(95, 95, 95);
  width: 30vw;
}
.admin-container .search-bar ion-icon {
  margin-top: 0.5vh !important;
}

.admin-container .search-bar:focus{
  outline: none;
  border: 2px solid rgb(223, 222, 222);
}
.admin-display-container{
    background: white;
    height: 20vh;
    width: 30vw;
}
.create-seller-btn{
  margin: auto .8em;
  padding: 0.5em 2em;
  background-color: #01c5a1;
  border: 2px solid whitesmoke !important;
  border-radius: 0.5em;
  color: white;
  transition: all 0.3s;
}

.create-seller-btn:hover{
    background-color: #029d80;
    box-shadow: 2px 2px 5px #f9f9f9;
    cursor: pointer;
}


.grid-container {
    border-radius: 3%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1em;
    padding: 5vh 5vh;
    scroll-behavior: smooth;
}
@media screen and (max-width: 950px) {
    .grid-container{
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 700px) {
    .grid-container {
        grid-template-columns: 2fr;
    }
}
</style>