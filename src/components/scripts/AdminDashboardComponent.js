import SellerCardComponent from '@/components/SellerCardComponent'
import { mapGetters } from 'vuex';
// import { sellers } from './mockSellers';

export default {
    name: 'AdminDashboardComponent',
    components:{
        SellerCardComponent
    },
    data(){
        return {
            isLoading: false,
            // sellers: sellers,
            searchKey: ''
        }
    },
    created(){
        this.$store.dispatch('GET_ALL_SELLERS', {
            success: ()=>{
                console.log('GET ALL sellers success.');
            },
            error: ()=>{
                console.warn('GET ALL seller failure.');
            }
        })
    },
    computed:{
        ...mapGetters({
            sellers: 'getSellers'
        })
    },
    methods: {
        updateLoader(){
            this.isLoading = false; //fix after service layer is integrated.
            setInterval(()=>{
                this.isLoading = true;
            }, 5000);
            
        },
        createSeller(){
            this.$router.push({path: `/admindashboard/create`})
        }
    }
}