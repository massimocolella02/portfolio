<template>
  <div class="bg-secondary text-white">
    <HeaderComp/>
    <HeroComp/>
    <ServiceComp/>
    <LatestProjectsComp/>
    
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
import LatestProjectsComp from './components/LatestProjectsComp.vue';
import ServiceComp from './components/ServiceComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
    ServiceComp,
    LatestProjectsComp
    
  }
}
</script>

<style>
  
</style>