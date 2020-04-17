<template>
  <div class="app">
    <header>
      <div class="header-container">
        <img src="http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck-big.png" />
        <h1>FoodTrucks.Show</h1>
      </div>
      <TruckCounter
      :count="count"
      />
    </header>
    <main>
      <nav>
        <template v-if="this.selectedTruck.name">
          <h3 class="selected-truck"><a :href="this.selectedTruck.website">{{this.selectedTruck.name}}</a></h3>
          <h4>{{this.selectedTruck.food_type}}</h4>
          <p>{{this.selectedTruck.hours}}</p>
          <p>{{this.selectedTruck.address}}</p>
          <p>{{this.selectedTruck.phone}}</p>
          <img class="truck-card-img truck-card-first-img" :src="this.selectedTruck.truck">
          <img class="truck-card-img truck-card-last-img" :src="this.selectedTruck.food">
        </template>
        <button class="">Type</button>
        <button class="">Rating</button>
        <button class="">Random</button>
        <button>Top 5</button>
        <button>Add/edit truck</button>
        <button class="last-button">Contact us</button>
      </nav>
      <!-- {{this.state.trucksLoaded === true ? <Gmap /> : null}} -->
      <Gmap :allTrucks="allTrucks" :trucksLoaded="trucksLoaded" @setSelectedTruck="setSelectedTruck" @truckCounter="truckCounter"/>
    </main>
    <footer>
        <div class="hide-this-tiny-img">
          <img class="tiny-truck-img" :src="this.selectedTruck.food">
        </div>
        <div class="hide-this">
          <h4 class="selected-truck"><a :href="this.selectedTruck.website">{{this.selectedTruck.name}}</a> | {{this.selectedTruck.food_type}} | {{this.selectedTruck.hours}} | {{this.selectedTruck.address}} | {{this.selectedTruck.phone}}</h4>
        </div>
        <div class="hide-this-tiny-img">
          <img class="tiny-truck-img" :src="this.selectedTruck.truck">
        </div>
      <h4 class="footer-title">© 2020 FoodTrucks.Show</h4>
    </footer>
  </div>
</template>


<script>
import TruckCounter from "@/components/TruckCounter"
import Gmap from "@/components/Gmap"

export default {
  data(){
    return {
      count: 0,
      allTrucks: [],
      selectedTruck: {},
      trucksLoaded: false,
    }
  },
  components: {
    TruckCounter: TruckCounter,
    Gmap: Gmap
  },
  methods: {
    truckCounter(amount){
      this.count = amount
    },
    setSelectedTruck(truck){
      console.log("fired on App level");
      this.selectedTruck = truck;
    }
  },
  created() {

  }


}
</script>

<style lang="scss">
@import '@/styles/_reset.scss';
@import '@/styles/_colors.scss';
@import '@/styles/_general.scss';
@import '@/styles/_sizes.scss';
@import '@/styles/_typography.scss';
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;600&family=Roboto+Slab&display=swap');

* {
  font-family: $body-font;
  color: $grey-3;
  font-size: $baseline;
}

a:link, a:visited {
	color: $grey-3;
	text-decoration: none;
}

a:active {
	text-decoration: none;
	color: #729FCF;
}

a:hover {
	color: #FFAB00;
}

h1 {
  font-family: $title-font;
  color: $grey-2;
  font-size: $font-xxxl;
  font-weight: 600;
  text-align: left;
}

@media (max-width: $small-breakpoint) {
  h1 {
  font-size: $font-xl;
  }
}

@media (max-width: $medium-breakpoint) {
  h1 {
  font-size: $font-xxl;
  }
}


h2 {
  font-size: $font-baseline;
}

@media (max-width: $medium-breakpoint) {
  h2 {
    font-size: 10px;
  }
}

h3 {
  font-size: $font-large;
  font-family: $body-font;
}

h4 {
  font-size: $font-xs;
}

body {

}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.header-container {
  display: flex;
  align-items: center;
}

header {
  display: flex;
  justify-content: flex-start;
  .truck-counter {
    font-family: $title-font;
    display: flex;
    align-items: flex-end;
    h2 {
      padding-left: $baseline;
    }
  }
  img {
    width: 50px;
  }
  padding: $baseline;
  background-color: $primary-l2;
}

@media (max-width: $small-breakpoint) {
  header {
    padding: $xs;
    .truck-counter {
      display: none;
    }
  }
}

main {
  display: flex;
  flex: 1;
}

@media (max-width: $small-breakpoint) {
  main {

  }
}

nav {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 $baseline;
  min-width: 200px;
  text-align: left;
  h3 {
    margin: $small 0;
    border-bottom: .5px solid $grey-5;
  }
  .selected-truck {
    margin-bottom: 2px;
  }
  .truck-card-img {
    width: 200px;
  }
  .truck-card-first-img {
    margin-top: $xs;
  }
  .truck-card-last-img {
    border-bottom: .5px solid $grey-5;
    margin-bottom: $large;
  }
  h4{
    margin-bottom: $xs;
  }
  p {
    font-size: $small;
    margin: $xs 0;
  }
  button {
    // align-self: center;
    margin: $xs 0;
    border: none;
    background-color: hsl(27, 100%, 95%);
    color: hsl(27, 100%, 20%);
    font-size: $font-xs;
    font-weight: 600;
    padding: $xxs $xxs;
  }
  button:hover {
    background-color: hsl(40, 100%, 80%);
    color: hsl(40, 100%, 20%);
  }
  .last-button {
  }
}

@media (max-width: $small-breakpoint) {
  nav {
    display: none;
  }
}

@media (max-width: $medium-breakpoint) {
  nav {
    min-width: 100px;
    .truck-card-img {
      width: 125px;
    }
  }
}

a {

}

.gmap {
  display: flex;
  align-items: flex-start;
  width: 90%;
  // img {
  //   width: 100%;
  // }
}

@media (max-width: $small-breakpoint) {
  .gmap {
    width: 100%;
    // align-self: center;
  }
}

footer {
  display: flex;
  align-items: flex-start;
  padding: $xs $xs;
}

.hide-this {
  display: none;
}

.hide-this-tiny-img {
  display: none;
}

@media (max-width: $small-breakpoint) {
  .tiny-truck-img {
    width: 100px;
  }

  .hide-this-tiny-img {
    display: flex;
  }

  .hide-this {
    display: flex;
  }
  .footer-title {
    display: none;
  }
}

</style>
