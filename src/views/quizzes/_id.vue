<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="d-flex flex-wrap justify-content-center align-items-center w-100">
      <div class="d-flex m-4 w-100">
        <div class="d-flex justify-content-between w-50">
          <router-link class="btn btn-primary" style="font-size: 24px; height: fit-content" role="button" :to="{ name: 'question', params: { id: this.$route.params.quizIndex } }">Atpakaļ</router-link>
          <p class="h2" style="font-size: 64px">{{ timer }}</p> <!-- TODO -->
        </div>
      </div>
      <div class="container">
        <div v-html="question.title" class="h2 mb-4 " style="color: #212529;padding-left: 5px"></div>
        <div v-if="showAnswers" id="options">
          <ol class="d-flex flex-column gap-1">
            <li v-for="answer in question.answers" :key="answer.index" class="rounded-3 p-2" :class="{ 'correct-answer': answer.correct && showCorrectAnswer }" style="font-size: 30px;color: #212529">
              {{ answer.title }}
            </li>
          </ol>
        </div>
        <div class="d-flex justify-content-between m-4">
          <button v-if="!showAnswers" class="btn btn-primary" style="font-size: 24px" @click="showAnswers = true">Rādīt atbilžu variantus</button>
          <button class="btn btn-primary" style="font-size: 24px" @click="showAnswer()">Parādīt atbildi</button>
          <transition>
            <button v-if="showCorrectAnswer && quiz.questions.indexOf(question) + 1 >= quiz.questions.length" class="btn btn-primary" style="font-size: 24px" @click="finish()">Pabeigt</button>
            <button v-else-if="showCorrectAnswer" class="btn btn-primary" style="font-size: 24px" @click="submit()">Nākamais</button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {quizzes} from "../../helper/quizzes";
import audio from "../../assets/sounds/TimerSound.mp3"

export default {
  data () {
    return {
      timer: 30,
      timerAudio: new Audio(audio),
      showAnswers: false,
      showCorrectAnswer: false,
    }
  },
  computed: {
    quizzes() {
      return window.quizzes
    },
    quiz() {
      return window.quizzes.value[this.$route.params.quizIndex]
    },
    question: {
      get() {
        return window.quizzes.value[this.$route.params.quizIndex].questions[this.$route.params.questionIndex]
      },
      set() {
        window.quizzes.value[this.$route.params.quizIndex].questions[this.$route.params.questionIndex].available = !window.quizzes.value[this.$route.params.quizIndex].questions[this.$route.params.questionIndex].available
      }
    }
  },
  mounted() {
    this.startTask()
  },
  beforeUnmount() {
    this.timerAudio.pause()
  },
  methods: {
    startTimer() {
      setTimeout(() => {
        if (this.timer <= 0) {
          return
        }
        if (this.timer >= 1) {
          this.timer--
        }
        this.startTimer()
      }, 990)
    },
    async startTask() {
      await this.timerAudio.play()
      this.startTimer()
    },
    showAnswer() {
      this.showAnswers = true
      this.question = !this.question
      localStorage.setItem('quizzes', JSON.stringify(quizzes))
      this.showCorrectAnswer = !this.showCorrectAnswer
    },
    submit(){
      if (!this.quiz.questions[parseInt(this.$route.params.questionIndex) + 1].available) {
        this.$router.push({ name: 'question', params: { id: this.$route.params.quizIndex } })
      } else {
        this.$router.push({ name: 'quiz', params: {quizIndex: this.$route.params.quizIndex, questionIndex: (parseInt(this.$route.params.questionIndex) + 1)} })
      }
    },
    finish() {
      this.$router.push({ name: 'question', params: { id: this.$route.params.quizIndex } })
    }
  }
};

</script>
<style>
body {
  background-image: none;
}

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

/*.next-button {*/
/*  font-size: 24px;*/
/*  transition: 0.5s;*/
/*  opacity: 1;*/
/*}*/

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.correct-answer {
  background-color: lightgreen;
  transition: 0.5s;
}
</style>