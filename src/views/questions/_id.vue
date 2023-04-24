<template>
  <div>
    <router-link class="btn btn-primary m-4" style="font-size: 24px" role="button" to="/">Atpakaļ</router-link>
    <h1 class="text-center mt-5">{{ quizzes[index].title }} jautājumi</h1>
    <div class="d-flex justify-content-center align-items-center gap-5 w-100 mt-5">
      <QuestionCard
        v-for="(question, questionIndex) in quizzes[index].questions"
        :key="questionIndex"
        :questionIndex="questionIndex"
        :quizIndex="quizzes.indexOf(quizzes[index])"
      />
    </div>
  </div>

</template>
<script>
import QuestionCard from "../../components/QuestionButton.vue";

export default {
  components: {
      QuestionCard,
  },
  data() {
    return {
      index: this.$route.params.id
    }
  },
  computed: {
    quizzes() {
      return window.quizzes.value
    },
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
      this.$router.push('/')
    }
  }
};
</script>

<style>
body {
  background-image: none;
}
</style>
