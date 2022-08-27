export default{
    name: 'SellerCardComponent',
    data(){
        return {
            isInventoryOpened: false
        }
    },
    methods:{
        openInventory(){
            this.isInventoryOpened = true;
            setInterval(()=>{
                this.isInventoryOpened = false
            }, 1200);
        }
    },
    computed:{

    }
}