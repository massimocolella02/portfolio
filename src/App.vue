<template>
  <div class="bg-secondary text-white">
    <HeaderComp/>
    <HeroComp/>
    <ServiceComp/>
    <LatestProjectsComp/>
    <ContactComp/>
  </div>
</template>

<script>
import ContactComp from './components/ContactComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
import LatestProjectsComp from './components/LatestProjectsComp.vue';
import ServiceComp from './components/ServiceComp.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
    ServiceComp,
    LatestProjectsComp,
    ContactComp
  },
  mounted() {
    AOS.init();
  },
}
</script>

<style>

</style>