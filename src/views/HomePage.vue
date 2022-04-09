<template>
  <div class="wrapper">
    <header-component />
    <main class="main" id="main">
      <div class="container">
        <div class="main__wrapper">
          <div class="main__top">
          <div class="main__search">
            <input type="text" class="main__input" placeholder="Введите ФИО" />
          </div>
          <div class="main__sort">
            <button class="main__sort-btn main__sort-bio">ФИО &#8645;</button>
            <button class="main__sort-btn main__sort-date">Дата рождения &#8645;</button>
          </div>
          </div>
          <div class="main__all-cards">
            <router-link to="/card" class="main__card">
              <div class="main__card-img">
                <img src="../assets/img/image.jpg" alt="photo" />
              </div>
              <div class="main__card-info">
                <div class="main__card-name"> <span>ФИО: </span> Jasper Brown </div>
                <div class="main__card-date"> <span>Дата рождения: </span> 11.11.1911 </div>
                <div class="main__card-phone"> <span>Телефон: </span> +9 (724)-983-6496 </div>
                <div class="main__card-email"> <span>e-mail: </span> jasper.brown@example.com </div>
              </div>
            </router-link>
            <router-link to="/card" class="main__card">
              <div class="main__card-img">
                <img src="../assets/img/image.jpg" alt="photo" />
              </div>
              <div class="main__card-info">
                <div class="main__card-name"> <span>ФИО: </span> Jasper Brown </div>
                <div class="main__card-date"> <span>Дата рождения: </span> 11.11.1911 </div>
                <div class="main__card-phone"> <span>Телефон: </span> +9 (724)-983-6496 </div>
                <div class="main__card-email"> <span>e-mail: </span> jasper.brown@example.com </div>
              </div>
            </router-link>
            <router-link to="/card" class="main__card">
              <div class="main__card-img">
                <img src="../assets/img/image.jpg" alt="photo" />
              </div>
              <div class="main__card-info">
                <div class="main__card-name"> <span>ФИО: </span> Jasper Brown </div>
                <div class="main__card-date"> <span>Дата рождения: </span> 11.11.1911 </div>
                <div class="main__card-phone"> <span>Телефон: </span> +9 (724)-983-6496 </div>
                <div class="main__card-email"> <span>e-mail: </span> jasper.brown@example.com </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>
