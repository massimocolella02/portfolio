<template>
    <div class="container mx-auto flex flex-col items-center justify-center px-4 py-12 gap-y-6" data-aos="fade-up">
        <h3 class="font-bold py-6">My <span class="text-primary">Latest</span> Projects</h3>

        <div class="projects">
            <swiper
                :slidesPerView="1"
                :spaceBetween="10"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
                }"
                :modules="modules"
                class="mySwiperProjects sm:!container max-w-[90vw] px-4"
            >
                <swiper-slide class="project border rounded-lg shadow-xl">
                  <a href="https://test.theailati.com/" target="_blank" class="w-full h-full">
                    <img class="rounded-lg shadow-xl" src="../assets/img/ailati.webp" alt="ailati image" width="100%" height="100%">
                    <a target="_blank" class="absolute bottom-2 left-2 font-bold z-10">
                      <h5 class="text-white">The Ailati Collection</h5>
                    </a>
                  <div class="overlay"></div>
                  </a>
                </swiper-slide>

                <swiper-slide class="project border rounded-lg shadow-xl">
                  <a href="https://arredocasa.fix.one/" target="_blank" class="w-full h-full">
                    <img class="rounded-lg" src="../assets/img/arredo.webp" alt="arredo da casa image" width="100%" height="100%">
                    <a target="_blank" class="absolute bottom-2 left-2 font-bold z-10">
                      <h5>Arredo da casa</h5>
                    </a>
                    <div class="overlay"></div>
                  </a>
                </swiper-slide>

            </swiper>
        </div>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import {Autoplay,Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Autoplay],
      };
    },
  };
</script>

<style scoped>
    .project{
        position: relative;
        aspect-ratio: 1;
        @apply w-full lg:!w-[500px];
        background-color: black;
    }
    .overlay{
      background-color: black;
      opacity: 0.3;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: ease-in 0.25s opacity;
    }
    .project:hover .overlay{
      opacity: 0.5;
    }
</style>