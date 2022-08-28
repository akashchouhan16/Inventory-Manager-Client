import { getsellerdetail } from "@/service/SellerProductService";

export default {
  state: {
    seller: {},
  },

  getters: {
    getSeller(state) {
      return state.seller;
    },
  },

  mutations: {
    setSeller(state, value) {
      state.seller = value;
    },
  },

  actions: {
    getsellerdetailsFromService(context, sellerid) {
      getsellerdetail({
        sellerid,
        success: (data) => {
          console.log(data);
          this.commit("setSeller", data);
        },
        error: (e) => {
          this.commit("setSeller", []);
          console.warn(e);
        },
      });
    },
  },
};
