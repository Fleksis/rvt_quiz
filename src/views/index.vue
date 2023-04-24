<template>
  <button class="btn btn-primary m-4" style="font-size: 24px" @click="reset()">Attīrīt</button>
  <div class="d-flex flex-column justify-content-center align-items-center gap-5" style="width: 100%; margin-top: 50px;">
    <div class="d-flex justify-content-center text-center" style="width: 100%">
      <h1 class="display-6" style="color: white">Viktrīna "Grāmatvedības zināšanu lāde"</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-center gap-4" style="width: 80%">
      <Card
        v-for="(quiz, index) in quizzes"
        :key="index"
        :title="quiz.title"
        :index="index"
      />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    quizzes() {
      return window.quizzes.value
    }
  },
  mounted() {
    document.body.style.backgroundImage = "url(src/assets/images/RvtBackground.webp)"
  },
  unmounted() {
    document.body.style.backgroundImage = "none"
  },
  methods: {
    reset() {
      localStorage.removeItem('quizzes')
      window.location.reload();
    }
  }
};
</script>
<style>
body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.display-6{
  color: black;
  font-weight: lighter;
  font-family: 'Raleway', sans-serif;
  line-height: 60px;
  letter-spacing: 1px;
}
</style>