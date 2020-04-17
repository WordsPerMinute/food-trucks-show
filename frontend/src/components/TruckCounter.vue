<template>
  <div class="truck-counter">
    <h2>{{countString}}</h2>
    <!-- <button @click="increment">Increment!</button> -->
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  },
  computed: {
    countString(){

      var myDate = new Date();
      var month = ('0' + (myDate.getMonth() + 1)).slice(-2);
      var date = ('0' + myDate.getDate()).slice(-2);
      var formattedDate = month + '/' + date;

      return `Currently ${this.count} trucks serving in Denver today, ${formattedDate}`
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
