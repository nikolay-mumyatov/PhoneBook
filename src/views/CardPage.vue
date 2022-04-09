<template>
  <div class="wrapper">
    <header-component />
    <div class="person">
      <div class="container">
        <div class="person__card">
          <div class="person__img">
            <img src="../assets/img/image.jpg" alt="photo" />
          </div>
          <div class="person__info">
            <div class="person__info-name"><span>ФИО: </span> Jasper Brown</div>
            <div class="person__info-date">
              <span>Дата рождения: </span> 11.11.1911
            </div>
            <div class="person__info-phone">
              <span>Телефон: </span> +9 (724)-983-6496
            </div>
            <div class="person__info-email">
              <span>e-mail: </span> jasper.brown@example.com
            </div>
          </div>
        </div>
      </div>
    </div>
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
