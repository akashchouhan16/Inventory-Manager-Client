
export default{
    name: 'SellerCardComponent',
    data(){
        return {
            isInventoryOpened: false,
            sellerStatus: true //by default seller is active, can be toggled by the admin
        }
    },
    props: {
        seller: {
            type: Object,
            required: true,
            // default: ()=>{}
        }
    },
    methods:{
        openInventory(userId){
            
            this.isInventoryOpened = true;
            setInterval(()=>{
                this.isInventoryOpened = false
            }, 1200);

            this.$router.push({path: `/admindashboard/sellers/${userId}`});
        },
        disbaleSeller(userId){
            // This is a toggle function to disable or enable a seller.
            this.sellerStatus = !this.sellerStatus;
            this.$store.dispatch('DISABLE_SELLER', userId);
        }
    }
}