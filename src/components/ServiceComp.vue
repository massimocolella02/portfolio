<template>
    <div class="h-[90vh] shadow-xl flex items-center justify-center">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-4 lg:gap-x-8">

                <div class="flex flex-col gap-y-8 lg:-mt-28" data-aos="fade-up">
                    <h3 class="font-bold text-center lg:text-start">My <span class="text-primary">Services</span></h3>
                    <p class="text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem consequuntur quaerat ullam inventore, earum est perferendis culpa aliquam fugiat impedit dicta dolorum saepe non quisquam esse nobis nulla recusandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus asperiores quas repudiandae, iste eaque unde reprehenderit harum facere autem vel illo odit doloribus cupiditate dolorem nemo omnis voluptas eos maiores.</p>
                </div>

                <div class="grid-cols-2 gap-6 hidden md:grid">
                    <div class="card shadow-2xl rounded-xl" data-aos="flip-left" data-aos-duration="1000">
                        <h6 class="font-bold leading-6">Frontend Development</h6>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                    </div>

                    <div class="card shadow-2xl rounded-xl" data-aos="flip-right" data-aos-duration="1000">
                        <h6 class="font-bold leading-6">Backend Development</h6>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                    </div>

                    <div class="card shadow-2xl rounded-xl" data-aos="flip-left" data-aos-duration="1000">
                        <h6 class="font-bold leading-6">Headless Development</h6>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                    </div>

                    <div class="card shadow-2xl rounded-xl" data-aos="flip-right" data-aos-duration="1000">
                        <h6 class="font-bold leading-6">Magento Development</h6>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                    </div>
                </div>


                <swiper
                    :slidesPerView="2"
                    :spaceBetween="20"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    }"
                    :breakpoints="{
                    '640': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                    }"
                    :modules="modules"
                    class="mySwiper sm:!container max-w-[97vw] md:!hidden"
                >
                    <swiper-slide>
                        <div class="card shadow-2xl rounded-xl">
                            <h5 class="font-bold leading-5">Frontend Development</h5>
                            <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="card shadow-2xl rounded-xl">
                            <h5 class="font-bold leading-5">Backend Development</h5>
                            <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="card shadow-2xl rounded-xl">
                            <h5 class="font-bold leading-5">Headless Development</h5>
                            <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="card shadow-2xl rounded-xl">
                            <h5 class="font-bold leading-5">Magento Development</h5>
                            <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div></div>
        </div>
    </div>
    <div class="h-[10vh] custom">

        <div class="scroller">
            <ul class="tag-list photobanner">
                <img class="first" src="../assets/svg/html5.svg" alt="html5"/>
                <img src="../assets/svg/css3.svg" alt="css3"/>
                <img src="../assets/svg/javascript.svg" alt="javascript"/>
                <img src="../assets/svg/vue-solid.svg" alt="vue-solid"/>
                <img src="../assets/svg/nuxtdotjs.svg" alt="nuxtdotjs"/>
                <img src="../assets/svg/graphql.svg" alt="graphql"/>
                <img src="../assets/svg/php.svg" alt="php"/>
                <img src="../assets/svg/laravel.svg" alt="laravel"/>
                <img src="../assets/svg/wordpress.svg" alt="wordpress"/>
                <img src="../assets/svg/magento.svg" alt="magento"/>

                <img src="../assets/svg/html5.svg" alt="html5"/>
                <img src="../assets/svg/css3.svg" alt="css3"/>
                <img src="../assets/svg/javascript.svg" alt="javascript"/>
                <img src="../assets/svg/vue-solid.svg" alt="vue-solid"/>
                <img src="../assets/svg/nuxtdotjs.svg" alt="nuxtdotjs"/>
                <img src="../assets/svg/graphql.svg" alt="graphql"/>
                <img src="../assets/svg/php.svg" alt="php"/>
                <img src="../assets/svg/laravel.svg" alt="laravel"/>
                <img src="../assets/svg/wordpress.svg" alt="wordpress"/>
                <img src="../assets/svg/magento.svg" alt="magento"/>
            </ul>
        </div>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import {Autoplay } from 'swiper/modules';

  import 'swiper/css/pagination';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
  };
</script>

<style scoped>
/* Photo Banner */
.scroller {
    width: 100%;
    overflow: hidden;
    height: 100%;
}

.photobanner {
    height: 100%;
    width: 3550px;
    font-size: 0;
    display: flex;
    align-items: center;
}

.photobanner img {
	margin-bottom: 10px;
	margin-right: 5px;
    height: 70px;
	width: 180px;
}

.first {
    -webkit-animation: bannermove 30s linear infinite;
       -moz-animation: bannermove 30s linear infinite;
        -ms-animation: bannermove 30s linear infinite;
         -o-animation: bannermove 30s linear infinite;
            animation: bannermove 30s linear infinite;
}
 
@keyframes bannermove {
 0% {margin-left: 0px;}
 100% {margin-left: -2130px;}
}
</style>