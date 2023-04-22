<template>
  <div class="card text-center d-flex justify-content-between" style="height: 230px;width: 300px;">
    <div class="d-flex justify-content-center align-items-center flex-grow-1">
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <button class="btn btn-primary" style="font-size: 24px" @click="$router.push('questions/' + index)" role="button" :disabled="!this.quiz.available">Sākt</button>
  </div>
</template>
<script>
export default {
  props: ['title', 'index'],
  data() {
    return {
      disabledQuiz: false
    }
  },
  computed: {
    quiz() {
      return window.quizzes.value[this.index]
    }
  },
  mounted() {
    let answeredQuestionCount = 0
    this.quiz.questions.forEach((question) => {
      if (!question.available) {
        answeredQuestionCount++
      }
    })

    if (answeredQuestionCount === this.quiz.questions.length) {
      this.quiz.available = false
    }
  }
};
</script>

<style scoped>
.card {
  padding: 15px;
}
.btn {
  padding: 10px 15px;
}
</style>