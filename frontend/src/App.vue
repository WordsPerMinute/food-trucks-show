<template>
  <div class="app">
    <header>
      <div class="header-container">
        <img src="http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck-big.png" />
        <h1>FoodTrucks.Show</h1>
      </div>
      <TruckCounter
      :count="count"
      @increment="increment"
      />
    </header>
    <main>
      <nav>
        <h3>Filter</h3>
        <div class="button-container">
          <input type="radio" id="type" name="type" value="tbd">
          <label for="radio">Type</label>
        </div>
        <div class="button-container">
          <input type="radio" id="rating" name="rating" value="tbd">
          <label for="radio">Rating</label>
        </div>
        <button>Denver's Top 5</button>
        <button class="last-button">Random truck</button>
        <h3>Info</h3>
        <button>Add truck</button>
        <button>Suggest edit</button>
        <button class="last-button">Contact us</button>
      </nav>
      <Gmap />
    </main>
    <footer>
      <h4>© 2020 FoodTrucks.Show</h4>
    </footer>
  </div>
</template>


<script>
import TruckCounter from "@/components/TruckCounter"
import Gmap from "@/components/Gmap"

export default {
  data(){
    return {
      count: 5
    }
  },
  components: {
    TruckCounter: TruckCounter,
    Gmap: Gmap
  },
  methods: {
    increment(amount){
      this.count = this.count + amount
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_reset.scss';
@import '@/styles/_colors.scss';
@import '@/styles/_general.scss';
@import '@/styles/_sizes.scss';
@import '@/styles/_typography.scss';

* {
  font-family: $body-font;
  color: $grey-3;
  font-size: $baseline;
}

h1 {
  font-family: $title-font;
  color: $grey-2;
  font-size: $font-xxxl;
  font-weight: 600;
  text-align: left;
}


h2 {
  font-size: $font-baseline;
}

@media (max-width: $medium-breakpoint) {
  h2 {
    font-size: $font-xs;
  }
}

h3 {
  font-size: $font-large;
}

h4 {
  font-size: $font-xs;
}

body {

}

.app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
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
  align-items: flex-start;
  padding: 0 $baseline;
  min-width: 200px;
  h3 {
    margin: $small 0;
    border-bottom: .5px solid $grey-5;
  }
  button {
    // align-self: center;
    margin: $small 0;
    border: none;
    background-color: hsl(27, 100%, 95%);
    color: hsl(27, 100%, 20%);
    font-size: $font-xs;
    padding: $xxs $xxs;
  }
}

@media (max-width: $small-breakpoint) {
  nav {
    display: none;
  }
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

@media (max-width: 450px) {

}

</style>
