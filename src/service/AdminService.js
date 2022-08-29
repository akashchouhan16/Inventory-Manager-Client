import axios from "axios"

// const GET_SELLERS_API = 'http://10.30.1.144:8007/admin/getAllUsers'
const GET_SELLERS_API = 'http://10.30.1.35:8005/admin/sellers'
const DISBALE_SELLER_API = 'http://10.30.1.35:8005/admin/status/'
const SELLER_SEARCH_API = 'http://10.30.1.35:8005/admin/sellers/'

export const getAllSellers = ({success, error})=>{
    axios.get(GET_SELLERS_API)
         .then((response)=>{
            success && success(response);
         })
         .catch((err)=>{
            error && error(err);
         })
}

export const disbaleSeller = ({success, error, userId}) =>{
   axios.put(DISBALE_SELLER_API + userId, userId)
         .then((response)=>{
               success && success(response);
         })
         .catch((err)=>{
               error && error(err);
         })
}

export const getSellerFromSearch = ({success, error, searchKey}) =>{
      axios.get(SELLER_SEARCH_API + searchKey)
            .then((response)=>{
                  success && success(response);
            })
            .catch(err =>{
                  error && error(err);
            })
}