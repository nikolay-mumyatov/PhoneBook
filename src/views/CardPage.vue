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
            <div class="person__info-item person__info-name"><span>ФИО: </span> Jasper Brown</div>
            <div class="person__info-item person__info-date">
              <span>Дата рождения: </span> 11.11.1911
            </div>
            <a href="tel:+9 (724)-983-6496" class="person__info-item person__info-phone">
              <span>Телефон: </span> +9 (724)-983-6496
            </a>
            <a href="mailto:jasper.brown@example.com" class="person__info-item person__info-email">
              <span>e-mail: </span> jasper.brown@example.com
            </a>
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
