<template>
  <div class="d-flex justify-content-center align-items-center mt-1">
    <div class="d-flex flex-wrap justify-content-center align-items-center w-100">
      <div class="d-flex justify-content-between align-items-center m-4 w-100">
        <router-link class="btn btn-primary" style="font-size: 24px" role="button" :to="{ name: 'question', params: { id: this.$route.params.quizIndex } }">Atpakaļ</router-link>
        <div>123</div> <!-- TODO -->
      </div>
      <div class="container">
        <div style="padding-top: 7px;" >
          <div class="h2 mb-4 " style="color: #212529;padding-left: 5px">{{ `${quiz.questions.indexOf(question) + 1}/${quiz.questions.length} ${question.title}` }}</div>
          <div id="options">
            <ol class="d-flex flex-column gap-1">
              <li v-for="answer in question.answers" :key="answer.index" class="rounded-3 p-2" :class="{ 'correct-answer': answer.correct && showCorrectAnswer }" style="font-size: 30px;color: #212529">
                {{ answer.title }}
              </li>
            </ol>
          </div>
        </div>
        <div class="d-flex justify-content-between m-4">
          <button class="btn btn-primary" style="font-size: 24px" @click="showAnswer()" >Parādīt atbildi</button>
          <button v-if="quiz.questions.indexOf(question) + 1 >= quiz.questions.length" class="btn btn-primary" style="font-size: 24px" @click="finish()" >Pabeigt</button>
          <button v-else class="btn btn-primary" style="font-size: 24px" @click="submit()" >Nakamais</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      // currentQuestion: 0,
      // correctAnswers: 0,
      // selectedAnswer: null,
      // score: null,
      // showError: false,
      showCorrectAnswer: false,
    }
  },
  computed: {
    quiz() {
      return window.quizzes.value[this.$route.params.quizIndex]
    },
    question() {
      return window.quizzes.value[this.$route.params.quizIndex].questions[this.$route.params.questionIndex]
    }
  },
  methods: {
    showAnswer() {
      this.question.available = false
      this.showCorrectAnswer = !this.showCorrectAnswer
    },
    submit(){
      this.$router.push({ name: 'quiz', params: {quizIndex: this.$route.params.quizIndex, questionIndex: (parseInt(this.$route.params.questionIndex) + 1)} })
      this.$forceUpdate()
    },
    finish() {
      this.$router.push({ name: 'question', params: { id: this.$route.params.quizIndex } })
    }
  }
};

</script>
<style scoped>
.container{
  box-shadow: 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  color: #616161;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  max-width: 1000px;
}

ol {
  counter-reset: list;
}

ol > li {
  list-style: none;
}

ol > li:before {
  content: counter(list, lower-alpha) ") ";
  font-weight:bold;
  counter-increment: list;
}

.correct-answer {
  background-color: lightgreen;
  transition: 0.5s;
}
</style>