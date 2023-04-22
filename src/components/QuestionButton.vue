<template>
  <button @click="$router.push({ name: 'quiz', params: {quizIndex: quizIndex, questionIndex: questionIndex} })" class="btn btn-primary d-flex justify-content-center align-items-center rounded-3 text-white button" :disabled="!quizQuestion.available">
    <span class="button-text">{{ questionIndex + 1 }}</span>
  </button>
</template>
<script>
export default {
  name: 'QuestionCard',
  props: ['quizIndex', 'questionIndex'],
  computed: {
    quizQuestion() {
      return window.quizzes.value[this.quizIndex].questions[this.questionIndex]
    }
  }
};
</script>

<style scoped>
  .button {
    width: 150px;
    height: 150px;
  }
  .button-text {
    font-size: 64px;
    cursor: pointer;
  }
</style>