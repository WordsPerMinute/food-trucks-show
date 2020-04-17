<template>
  <div class="gmap">
  </div>
</template>

<script>
// import MarkerClusterer from '@google/markerclustererplus/';
import gmapsInit from '../utils/gmaps';

export default {
  data(){
    return {
      allTrucks: [],
      loaded: this.trucksLoaded
    }
  },
  props: {
    trucksLoaded: Boolean,
  },
  methods: {

  },

  async mounted() {
    const response = await fetch(`http://localhost:3000/trucks`)
    const trucks = await response.json();
    this.allTrucks = trucks;
    this.$emit("truckCounter", trucks.length)
    
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      const markerClickHandler = (marker, truckObject) => {
        console.log("truck object clicked", truckObject);
        this.$emit('setSelectedTruck', truckObject);
        map.setCenter(marker.getPosition());
        map.setZoom(15);
      };

      // const locations = [];

      const locations = trucks.map(truck => {
        return {...truck,
          position: {lat: parseFloat(truck.lat), lng: parseFloat(truck.long)},
          type: 'truck',
          icon: `http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck.png`
        }
      })

        geocoder.geocode({ address: 'Denver, CO' }, (results, status) => {
          if (status !== 'OK' || !results[0]) {
            throw new Error(status);
          }

          // console.log(results)

          map.setCenter(results[0].geometry.location);
          map.fitBounds(results[0].geometry.viewport);
          map.panTo({lat: 39.739195, lng: -104.988869});
          map.setZoom(13);
        });


        // .map(x => new google.maps.Marker({ ...x, map }))
        const markers = locations.map((location) => {
          const truckObject = location;
          const marker = new google.maps.Marker({ ...location, map });
          marker.addListener('click', () => markerClickHandler(marker, truckObject));
          return marker;
        });
        markers;

      } catch (error) {
        console.error(error);
      }

  },
  computed: {

  },

}
</script>

<style lang="scss">

</style>
