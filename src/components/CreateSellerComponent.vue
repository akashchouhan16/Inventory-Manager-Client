<template>
    <div class="main-container">
        <div class="admin-container">
            <div class="admin-container-banner">
                Register New Merchant Account
                <router-link to="/admindashboard" class="router-link-btn">Back To Dashboard</router-link>
            </div>
            <div class="admin-display-container">
                <form class="create-seller-form">
                    <input type="text" placeholder="Enter Seller Name">
                    <input type="email" placeholder="Enter Seller Email">
                    <input type="text" placeholder="Enter Seller">
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./scripts/CreateSellerComponent"></script>

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
.admin-container-banner{
    width: 85vw;
    height: 20vh;
    margin: 2em;
    background: whitesmoke;
    border: none;
    border-radius: 1em;
    box-shadow: 2px 2px 10px #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: large;
    color: gray;
}

.admin-container-banner:hover{
    cursor: pointer;
    color: black;
}
.admin-container{
    height: 80vh;
    width: 90vw;
    background-color: white;
    border: none;
    border-radius: 1em;
    overflow: scroll;
}
.create-seller-form {
    padding: 1em;
    width: 100%;
    height: 100%;
}
.create-seller-form input{
    width: 50%;
    height: 3vh;
    margin: 0.5em;
    border: none;
    border-radius: 1em;
    padding: 0.4em 0.7em;
    color: rgb(101, 100, 100);
}

.create-seller-form input:focus{
    outline: 2px solid rgb(200, 200, 200);
}

.admin-display-container{
    background: #f9f9f9;
    height: 20vh;
    margin: 1em 2em;
    padding: 2em;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
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

.router-link-btn{
    background-color: #01c5a1;
    color: white;
    border-radius: 1em;
    margin: 1em;
    padding: .5em .7em;
    text-decoration: none;
    font-size: small;
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