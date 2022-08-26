<template>
    <div class="product-card">
            <!-- <img :src="require(`@/assets/product_7.jpg`)"> -->
            <img :src="require(`@/assets/brand-logo.png`)" alt="Image">
            <p style="font-size: small;"> Sample Item
            <br><span class="discounted-price">Rs. ItemPrice </span><span class="price-tag">Rs. MinPrice</span></p>
            <button type="submit" style="color: white; display: flex; justify-content: center; align-items: center;">
                <ion-icon name="cart-sharp" style="margin-right:.5em; font-size:large;"></ion-icon>
                <span class="add-to-cart-btntext">View Inventory</span>
                <span>Opening Inventory..</span>
            </button>
        </div>
</template>

<script></script>

<style scoped>

.discounted-price{
    font-size: small;
    color: gray;
    text-decoration: line-through;
    margin: 0.5em;
}
.price-tag{
    font-weight: bold;
    color: coral;
}
.price-tag:hover{
    text-decoration: underline;
    cursor: pointer;
}

.product-card img {
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

.product-card {
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

.product-card:hover{
    background-color: rgb(255, 255, 255);
    box-shadow: 3px 3px 20px rgb(107, 106, 106);
    cursor: pointer;
}

.product-page{
    display: inline;
    height: 40vh;
    width: 50vw;
    background-color: whitesmoke;
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
    .product-card {
        height: max-content;
    }
    .product-card button {
        font-size: small;
        width: 40vw;
        height: 10vh !important;
    }
    .sidebar {
        font-size: 5px !important;
    }
}

@media screen  and (max-width: 450px){
    
    .product-card img {
        width: 100%;
    }
    .product-card button {
        font-size: small;
        width: 40vw;
        height: 5vh !important;
    }

}
</style>