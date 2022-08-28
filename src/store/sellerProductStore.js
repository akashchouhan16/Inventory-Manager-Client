import { getsellerproducts, postsellerproducts, addsellerproducts } from "@/service/SellerProductService";

export default ({


    state:
    {
        sellerproducts: []
    },

    getters:
    {
        getSellerproducts(state) {
            return state.sellerproducts;
        }
    },

    mutations:
    {
        setSellerproducts(state, value) {
            state.sellerproducts = value;
        }
    },

    actions:
    {
        getsellerproductsfromservice({ commit }, sellerid) {


            // this.commit('setInput',input);

            // console.log('searchKey Updated to: ' + input);

            getsellerproducts({
                sellerid,
                success: ({ data }) => {
                    console.log(data)
                    commit('setSellerproducts', data)
                },
                error: (e) => {
                    commit('setSellerproducts', [])
                    console.warn(e);
                }

            })


        },

        putsellerproductstoservice({ dispatch }, payload) {


            // this.commit('setInput',input);

            // console.log('searchKey Updated to: ' + input);

            postsellerproducts({

                payload,
                success: (data) => {
                    console.log(data);
                    dispatch('getsellerproductsfromservice', 'QB12');

                },
                error: (e) => {
                    console.log(e);
                }

            })


        },

        addsellerproductstoservice(context, payload) {

            addsellerproducts({
    
                payload,
                success: (data) => {
                    console.log(data);
                    // dispatch('getsellerproductsfromservice','QB12');
    
                },
                error: (e) => {
                    console.log(e);
                }
    
            })
    
    
        }

    }

})
