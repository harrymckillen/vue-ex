<template>
  <div class="about my-4 w-full" >
    <h2 class="text-center text-2xl py-4 font-bold">Laois</h2>
    <div class="block sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
      <span class="inline-block sm:hidden md:hidden lg:hidden xl:hidden mr-2">Default </span>
      <span class="sm:block md:hidden lg:hidden xl:hidden">Small</span>
      <span class="hidden sm:hidden md:block lg:hidden xl:hidden">Medium</span>
      <span class="hidden sm:hidden md:hidden lg:block xl:hidden ">Large</span>
      <span class="hidden sm:hidden md:hidden lg:hidden xl:block">X-Large</span>
    </div>

    <div v-if="attractions" class="block mx-8">
      <p class="mt-4">{{attractions.count}} result(s) loaded.</p>
      <div class="flex flex-wrap ">
        <div class="mt-2 mr-2 w-1/2 md:w-1/3 lg:w-1/5 bg-white p-4 shadow-md rounded-sm flex-grow" v-for="(result, index) in attractions.results" :key="index">
          <h3 class="text-lg font-bold">{{result.name}}</h3>
          <p v-if="result.url"><a class="underline text-green-600" :href="result.url" target="_blank">Website</a></p>
          <span>Co-ordinates: {{result.geo.longitude}}, {{result.geo.latitude}}</span>
          <div class="mt-4 tags">
            <span class="rounded-sm p-2 bg-gray-500 text-white text-xs inline-block mr-2 mt-2" v-for="tag in result.tags" :key="tag">
              {{tag}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=name eq 'Abbeyderg Abbey and Graveyard'
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch('Ruins','tags')
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch('Laois','address')
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch('Ireland%5s Ancient East','tags')
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch('Graveyard','name')
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.tags/any(t: search.in(t, 'Graveyard, Ruins, Ireland%5s Ancient East'))
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=contains(tags, 'Ruins')
// https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=address/any()

export default {
  name: 'Attractions',
  components: {
  },
  computed: {
  },
  data () {
    return {
      attractionsUrl: 'https://failteireland.azure-api.net/opendata-api/v1/attractions?$filter=search.ismatch(\'Laois\',\'address/addressRegion\')',
      attractions: null
    }
  },
  mounted () {
    axios.get(this.attractionsUrl)
      .then(response => {
        this.attractions = response.data;
      })
      .catch(e => {
        console.log(e);
      })
  }
}
</script>
