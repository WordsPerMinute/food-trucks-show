<template>
  <div class="gmap">
  </div>
</template>

<script>
// import MarkerClusterer from '@google/markerclustererplus/';
import gmapsInit from '../utils/gmaps';

export default {
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      const markerClickHandler = (marker) => {
        console.log("clicked");
        map.setCenter(marker.getPosition());
        map.setZoom(15);
      };

      const locations = [
        {
          position: {
            lat: 39.734262,
            lng: -104.966813,
          },
          type: 'truck',
          icon: `http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck.png`,
        },
        {
          position: {
            lat: 39.753261,
            lng: -104.997017,
          },
          type: 'truck',
          icon: `http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck.png`,
        },
        {
          position: {
            lat: 39.753400,
            lng: -104.997017,
          },
          type: 'truck',
          icon: `http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck.png`,
        },
        {
          position: {
            lat: 39.739435,
            lng: -105.050528,
          },
          type: 'truck',
          icon: `http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck.png`,
        },
        {
          position: {
            lat: 39.713384,
            lng: -104.988240,
          },
          type: 'truck',
          icon: `http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck.png`,
        },
        {
          position: {
            lat: 39.763143,
            lng: -105.035135,
          },
          type: 'truck',
          icon: `http://foodtrucks.coreyhodge.net/map_spotlight/spotlight-truck.png`,
        },
        // ...
      ];

      geocoder.geocode({ address: 'Denver, CO' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        console.log(results)

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
        map.panTo({lat: 39.739195, lng: -104.988869});
        map.setZoom(13);
      });


      // .map(x => new google.maps.Marker({ ...x, map }))
      const markers = locations.map((location) => {
        const marker = new google.maps.Marker({ ...location, map });
        marker.addListener('click', () => markerClickHandler(marker));
        return marker;
      });
      markers;

      // console.log(markers);

      // var clusterOptions = {
      //   gridSize: 20,
      //   imagePath: 'http://foodtrucks.coreyhodge.net/mapcluster/m',
      //
      // }
      //
      // const markerClusterer = new MarkerClusterer(map, markers, clusterOptions);
      // markerClusterer;

    } catch (error) {
      console.error(error);
    }
  },
  props: {
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
