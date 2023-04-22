<template>
  <div class="container">
    <div class="question" style="padding-top: 7px;" >
      <div v-if="!score" class="h5" style="padding-left: 5px"><b> {{ questions[currentQuestion].title }} </b></div>
      <div id="options" style="padding: 10px 20px">
        <label v-if="!score" v-for="answer in questions[currentQuestion].answers" :key="answer.index" class="options">{{ answer.title }}
          <input :checked="selectedAnswer && selectedAnswer.title === answer.title" @click="selectedAnswer = answer" type="radio" name="radio">
          <span class="checkmark"></span>
        </label>
        <h1 v-if="score">{{score}}</h1>
      </div>
    </div>
    <div v-if="!score" class="d-flex justify-content-end pt-3">
      <div class="ml-auto">
        <button class="btn btn-success" @click="submit()" >Nakamais</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentQuestion: 0,
      correctAnswers: 0,
      selectedAnswer: null,
      score: null,
      showError: false
    }
  },

  methods: {
    submit(){
      if(!this.selectedAnswer){
        this.showError = true
        return
      } else if(this.selectedAnswer.correct){
        this.correctAnswers++
        this.selectedAnswer = null
      } else {

      }

      if(this.questions.length <= this.currentQuestion + 1){
        this.score = `Pareizo atbilžu skaits: ${this.correctAnswers} / ${this.questions.length}`
        return;
      }
      this.currentQuestion++
    }
  }
}

</script>

<style scoped>

#alertId{
  display: none;
}

.container{
  box-shadow: 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  color: #616161;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  max-width: 700px;
}
.container > p{
  font-size: 32px;
}
.question{
  width: 90%;
}
.options{
  position: relative;
  padding-left: 40px;
}
#options label{
  display: block;
  margin-bottom: 14px;
  font-size: 16px;
  cursor: pointer;
}
.options input{
  opacity: 0;
}
.checkmark {
  position: absolute;
  top: -1px;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.options input:checked ~ .checkmark:after {
  display: block;
}
.options .checkmark:after{
  content: "";
  width: 10px;
  height: 10px;
  display: block;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%,-50%) scale(0);
  transition: 300ms ease-in-out 0s;
}
.options input[type="radio"]:checked ~ .checkmark{
  background: #0D6EFD;
  transition: 300ms ease-in-out 0s;
}
.options input[type="radio"]:checked ~ .checkmark:after{
  transform: translate(-50%,-50%) scale(1);
}

.btn-success{
  padding: 5px 25px;
  background-color: #0D6EFD;
}
@media(max-width:576px){
  .question{
    width: 100%;
    word-spacing: 2px;
  }
}

</style>