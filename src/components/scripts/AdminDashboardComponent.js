import SellerCardComponent from '@/components/SellerCardComponent'

export default {
    name: 'AdminDashboardComponent',
    components:{
        SellerCardComponent
    },
    data(){
        return {
            isLoading: false,
            searchKey: '',
            sampleID: 'YX13uUAsd76uadsetY'
        }
    },
    methods: {
        updateLoader(){
            this.isLoading = false; //fix after service layer is integrated.
            setInterval(()=>{
                this.isLoading = true;
            }, 5000);
            
        },
        createSeller(){
            this.$router.push({path: `/admindashboard/${this.sampleID}`})
        }
    },
    computed:{

    }
}