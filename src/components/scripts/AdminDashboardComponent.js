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
                console.log('Get All Sellers success')
            },
            error: ()=>{
                console.warn('Something went wrong while seller fetch') 
            }
        })
        this.$store.dispatch('USER_LOGGED_IN')
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
        },
        processSearch(){
            this.$store.dispatch('GET_SELLER_FROM_SEARCH', this.searchKey);
            console.log('Getting all sellers based on search');
        }
    }
}