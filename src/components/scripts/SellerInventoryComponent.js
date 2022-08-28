import { mapGetters } from "vuex";

export default {
  name: "SellerInventoryComponent",
  data() {
    return {
      obj: {
        sellerId: "",
        productId: "",
        productName: "",
        discription: "",
        productPrice: "",
        sellingPrice: "",
        quantity: "",
        imageUrl: "",
        promo: "",
      },
    };
  },
  methods: {
    addproduct() {
      this.$store.dispatch("addsellerproductstoservice", this.obj);
    },
  },

  computed: {
    ...mapGetters({
      sellerobj: "getSeller",
    }),
  },
  // e44f6029-31e3-4138-8fcc-3e1390195477
  created() {
    const sellerId = localStorage.getItem('userId');
    this.$store.dispatch(
      "getsellerdetails",
      sellerId
      // "e44f6029-31e3-4138-8fcc-3e1390195477"
    );
  },
};
