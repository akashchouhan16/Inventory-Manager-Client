<template>
    <div class="seller-card">
            <!-- <img :src="require(`@/assets/product_7.jpg`)"> -->
            <img :src="require(`@/assets/brand-logo.png`)" alt="Image">
            <p style="font-size: small;"> Sample Seller
            <br><span class="seller-ref-id">Ref ID</span><span class="seller-id">Seller ID</span></p>
            
            <button class="view-inventory-btn" @click="openInventory()" >{{!isInventoryOpened? "View Inventory" : "Opening Inventory.."}}</button>
        </div>
</template>

<script src="./scripts/SellerCardComponent.js"></script>

<style scoped>

.seller-ref-id{
    font-size: small;
    color: gray;
    text-decoration: underline;
    margin: 0.5em;
}
.seller-id{
    font-weight: bold;
    color: #029d80;
}
.seller-id:hover{
    text-decoration: underline;
    cursor: pointer;
}

.seller-card img {
    border-radius: 0.3em;
    margin-bottom: 0.4em;
}

@media screen and (min-width: 950px) {
    img {
        max-width: 100%;
    }
}
  
  
.grid-container {
    border-radius: 3%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1em;
    padding: 5vh 5vh;
    scroll-behavior: smooth;
}

.seller-card {
    background-color: rgb(255, 255, 255);
    border-radius: 2%;
    border: .02em solid rgba(0, 0, 0, 0.091);
    padding: .5em;
    font-size: 2em;
    text-align: center;
    transition: width .1s, height .2s, box-shadow .3s;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
}
button {
    padding: .5em;
    margin-top: 3vh;
    background-color: #01c5a1 !important;
    height: 3em !important;
    border: none;
    border-radius: .7em !important;
    transition: box-shadow .1s;
    width: 17vw;
}
button:hover {
    cursor: pointer;
    box-shadow: 1px 1px 5px gray;
    background-color: #029d80 !important;
}

.seller-card:hover{
    background-color: rgb(255, 255, 255);
    box-shadow: 3px 3px 20px rgb(107, 106, 106);
    cursor: pointer;
}


@media screen and (max-width: 950px) {
    img {
        width: 100%;
    }
    .grid-container{
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 700px) {
    div.container{
        padding: .5em;
    }
}
@media screen and (max-width: 700px) {
    .grid-container {
        grid-template-columns: 2fr;

    }
    img {
        width: 90%;
    }
    .seller-card {
        height: max-content;
    }
    .seller-card button {
        font-size: small;
        width: 40vw;
        height: 10vh !important;
    }
    .sidebar {
        font-size: 5px !important;
    }
}

@media screen  and (max-width: 450px){
    
    .seller-card img {
        width: 100%;
    }
    .seller-card button {
        font-size: small;
        width: 40vw;
        height: 5vh !important;
    }

}
</style>