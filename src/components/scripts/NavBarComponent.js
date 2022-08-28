import { mapGetters } from "vuex";

export default {
  name: "NavBarComponent",
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    logOut() {
      console.warn("User logged out.");
      // localStorage.removeItem('userId');
      // localStorage.removeItem("role");
      // localStorage.removeItem("emailId");
      this.isLoggedIn = false;
      // this.$router.push()
    },
  },
  computed: {
    ...mapGetters({
      user: "getUserDetail",
    }),
  },
};
