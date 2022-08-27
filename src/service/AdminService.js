import axios from "axios"

const GET_SELLERS_API = 'http://10.30.1.144:8007/admin/getAllUsers'
const DISBALE_SELLER_API = 'http://10.30.1.144:8007/admin/updateStatus'


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
   axios.put(DISBALE_SELLER_API, userId)
         .then((response)=>{
               success && success(response);
         })
         .catch((err)=>{
               error && error(err);
         })
}
