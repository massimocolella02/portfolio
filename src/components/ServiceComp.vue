<template>
    <div class="h-[90vh] shadow-xl flex items-center justify-center">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-4 lg:gap-x-8">

                <div class="flex flex-col gap-y-8 lg:-mt-28">
                    <h3 class="font-bold text-center lg:text-start">My <span class="text-primary">Services</span></h3>
                    <p class="text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem consequuntur quaerat ullam inventore, earum est perferendis culpa aliquam fugiat impedit dicta dolorum saepe non quisquam esse nobis nulla recusandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus asperiores quas repudiandae, iste eaque unde reprehenderit harum facere autem vel illo odit doloribus cupiditate dolorem nemo omnis voluptas eos maiores.</p>
                </div>

                <div class="grid-cols-2 gap-6 hidden md:grid">
                    <div class="card shadow-2xl rounded-xl">
                        <h6 class="font-bold leading-6">Frontend Development</h6>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                    </div>

                    <div class="card shadow-2xl rounded-xl">
                        <h6 class="font-bold leading-6">Backend Development</h6>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                    </div>

                    <div class="card shadow-2xl rounded-xl">
                        <h6 class="font-bold leading-6">Headless Development</h6>
                        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, mollitia non, deserunt magnam nam animi, temporibus libero saepe culpa nihil doloribus aliquam accusamus magni deleniti fugiat maxime optio earum delectus!</p>
                    </div>

                    <div class="card shadow-2xl rounded-xl">
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

        <div class="scroller" data-speed="fast">
            <ul class="tag-list scroller__inner">
                <li>
                    <img src="../assets/svg/html5.svg" alt="html5"/>
                </li>
                <li>
                    <img src="../assets/svg/css3.svg" alt="css3"/>
                </li>
                <li>
                    <img src="../assets/svg/javascript.svg" alt="javascript"/>
                </li>
                <li>
                    <img src="../assets/svg/vue-solid.svg" alt="vue-solid"/>
                </li>
                <li>
                    <img src="../assets/svg/nuxtdotjs.svg" alt="nuxtdotjs"/>
                </li>
                <li>
                    <img src="../assets/svg/graphql.svg" alt="graphql"/>
                </li>
                <li>
                    <img src="../assets/svg/php.svg" alt="php"/>
                </li>
                <li>
                    <img src="../assets/svg/laravel.svg" alt="laravel"/>
                </li>
                <li>
                    <img src="../assets/svg/wordpress.svg" alt="wordpress"/>
                </li>
                <li>
                    <img src="../assets/svg/magento.svg" alt="magento"/>
                </li>
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
    mounted() {
        this.scroll();
    },
    methods: {
        scroll() {
            const scrollers = document.querySelectorAll(".scroller");

            // If a user hasn't opted in for recuded motion, then we add the animation
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
            }

            function addAnimation() {
            scrollers.forEach((scroller) => {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", true);

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it
                // add aria-hidden to it
                // add it into the `.scroller-inner`
                scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
                });
            });
            }

        }
    },
  };
</script>

<style scoped>
.scroller__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-block: 1rem;
}
.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}
.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}
.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}
.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}
@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
.tag-list img{
    max-width: 60px;
}
</style>