<template>
  <h1 v-flash="1000">Employee Of The Month</h1>
  <div v-if="personData">
    <h3>{{ personData.name.first }} {{ personData.name.last }}</h3>
  </div>
</template>

<script>
//import axios from "axios";
import randomPersonMixin from "../mixins/randomPersonMixin";
export default {
  name: "EmployeeOfTheMonthPage",
  mixins: [randomPersonMixin],
  /*  data() {
    return { personData: null };
  },
  created() {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => (this.personData = response.data.results[0]));
  }, */
};
</script>
