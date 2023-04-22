<template>
  <button class="btn btn-primary m-4" style="font-size: 24px" @click="reset()">Attīrīt</button>
  <div class="d-flex flex-column justify-content-center align-items-center gap-5" style="width: 100%; margin-top: 50px;">
    <div class="d-flex justify-content-center text-center" style="width: 100%">
      <h1 class="display-6" style="color: #212529">Pārbaudi savas zināšanas šadas kategorijās</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-center" style="width: 80%">
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
  methods: {
    reset() {
      localStorage.removeItem('quizzes')
      window.location.reload();
    }
  }
};
</script>
<style>
.navbar > div{
  text-align: center;
  vertical-align: center;
}
.h1{
  color: #0D6EFD;
  font-family: 'Raleway', sans-serif;
  font-weight: bolder;
  line-height: 60px;
  font-size: 35px;
  letter-spacing: 1px;
  padding-left: 6%;
}

.d-flex{
  gap: 20px;
}

.display-6{
  color: black;
  font-weight: lighter;
  font-family: 'Raleway', sans-serif;
  line-height: 60px;
  letter-spacing: 1px;
}
</style>