<template >
  <div class="cards">
    <div class="update" v-if="clicked">
      <form name="addproduct">
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" v-model="pname" />
            </td>
          </tr>
          <tr>
            <td>IMAGE(URL):</td>
            <td>
              <input type="text" v-model="image" />
            </td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>
              <textarea rows="4" cols="16" v-model="des"></textarea>
            </td>
          </tr>
          <tr>
            <td>Selling price:</td>
            <td>
              <input type="number" v-model="sprice" />
            </td>
          </tr>
          <tr>
            <td>Product price:</td>
            <td>
              <input type="number" v-model="pprice" />
            </td>
          </tr>
          <tr>
            <td>Promo:</td>
            <td>
              <input type="text" v-model="pro" />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <input
                type="button"
                class="display-button"
                value="update"
                @click="update()"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>

    <div v-else>
      <img :src="require(`@/assets/brand-logo.png`)" />
      <div class="info">
        <div class="name">{{ product.productName }}</div>
        <div class="price">₹{{ product.productPrice }}</div>
        <div class="discriptiontag">
          Description<span class="discriptiontext">{{
            product.discription
          }}</span>
        </div>
        <div class="quantity">Quantity:{{ product.quantity }}</div>
        <div class="edit">
          <input
            class="edit-product"
            type="button"
            value="EDIT"
            @click="changeflag()"
          />
        </div>
      </div>
      <br />
      <div class="modify">
        <input class="display-button" @click="sub()" type="button" value="-" />
        <input class="display-button" @click="add()" type="button" value="+" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      clicked: false,
      pname: "",
      pprice: 0,
      sprice: 0,
      image: "",
      pro: 0,
      des: "",
    };
  },

  methods: {
    changeflag() {
      this.clicked = true;
    },

    update() {
      this.clicked = false;
      if(this.pname || this.des=='' || this.image=='' || this.sprice==0 || this.pprice==0 || this.quantity==0 || this.pro==0)

          alert("Enter all the details");

        else{
      var obj = {
        sellerId: this.product.sellerId,
        productId: this.product.productId,
        productName: this.pname,
        discription: this.des,
        productPrice: this.pprice,
        sellingPrice: this.sprice,
        quantity: this.product.quantity,
        imageUrl: this.image,
        promo: this.pro,
      };
    }

      this.$store.dispatch("putsellerproductstoservice", obj);
    },
    add() {
      var obj = {
        sellerId: this.product.sellerId,
        productId: this.product.productId,
        productName: this.product.productName,
        discription: this.product.discription,
        productPrice: this.product.productPrice,
        sellingPrice: this.product.sellingPrice,
        quantity: this.product.quantity + 1,
        imageUrl: this.product.imageUrl,
        promo: this.product.promo,
      };

      console.log(obj);

      this.$store.dispatch("putsellerproductstoservice", obj);
    },

    sub() {
      let obj = {
        sellerId: this.product.sellerId,
        productId: this.product.productId,
        productName: this.product.productName,
        discription: this.product.discription,
        productPrice: this.product.productPrice,
        sellingPrice: this.product.sellingPrice,
        quantity: this.product.quantity - 1,
        imageUrl: this.product.imageUrl,
        promo: this.product.promo,
      };

      this.$store.dispatch("putsellerproductstoservice", obj);

      //   window.location.reload();
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  border-radius: 5px;
  border-style: solid;
  border-color: #01c5a1;
}

input[type="number"] {
  border-radius: 5px;
  border-style: solid;
  border-color: #01c5a1;
}

textarea {
  border-radius: 5px;
  border-style: solid;
  border-color: #01c5a1;
}

.edit-product {
  display: flex;
  justify-content: center;
}
.edit-product {
  background-color: #01c5a1;

  border: none;

  border-radius: 5px;

  width: 35px;

  color: black;

  margin: 0.5em 5em;

  width: 80px;

  height: 30px;

  font-size: 20px;

  transition-duration: 0.3s;
}
.input[type="button"] {
  background-color: #01c5a1;

  border: none;

  border-radius: 5px;

  width: 35px;

  color: black;

  margin: 5px;

  width: 80px;

  height: 30px;

  font-size: 20px;

  transition-duration: 0.3s;
}
.discriptiontag {
  margin-top: 3px;

  font-size: 11px;

  border-bottom: 1px grey;
}

.discriptiontag:hover {
  text-decoration: underline;
  cursor: pointer;
}
.discriptiontext {
  visibility: hidden;
  background-color: #f9f9f9;

  color: black;

  width: 150px;

  border-radius: 6px;

  padding: 5px 0;

  position: absolute;

  z-index: 1;
}

.discriptiontag:hover .discriptiontext {
  visibility: visible;
}
.cards {
  height: 85%;
  width: 23.2%;
  display: flex;
  justify-content: center;
  /* border: none; */
  background-color: white;
  /* flex-wrap: nowrap; */
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-style: solid;
  border-color: #f9f9f9;
  border-radius: 5px;
  margin: 10px;
  transition: all 0.35s;
  /* font-size:8px; */
}

.price {
  margin-top: 10px;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.name {
  color: black;
  font-size: 19px;
}
.quantity {
  margin-top: 7px;
  font-size: 11px;
  border-style: solid;
  border-radius: 3px;
  border-color: #01c5a1;
  /* width:80px; */
  margin-left: 49px;
  margin-right: 49px;
  padding: 2px;
}

img {
  height: 250px;
  width: 250px;
}
.cards:hover {
  /* height:400px;
    width:25%;
    margin:10px;
    justify-content: center;
    border:none;  */
  box-shadow: 2px 2px 10px grey;
}
.display-button {
  background-color: #01c5a1;
  border: none;
  border-radius: 5px;
  width: 35px;
  color: black;
  margin: 5px;
  width: 80px;
  height: 30px;
  font-size: 20px;
  transition-duration: 0.3s;
}
.display-button:hover {
  background-color: #029d80;
  border: none;
  border-radius: 5px;
  width: 35px;
  color: white;
  margin: 5px;
  width: 85px;
  height: 35px;
  font-size: 20px;
}
.info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: grey;

  /* font-size:20px; */
}
.link {
  /* text-align: center; */
  padding: 10;
}

@media screen and (max-width: 1060px) {
  img {
    height: 200px;
    width: 200px;
  }

  .price {
    font-size: 13px;
  }

  .name {
    font-size: 16px;
  }
  .quantity {
    font-size: 11px;
  }
}

@media screen and (max-width: 1060px) {
  .cards {
    width: 50%;
  }
}
</style>