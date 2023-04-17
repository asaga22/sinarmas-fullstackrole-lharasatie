<template>
  <div id="app">
      <!-- input number form -->
      <form @submit.prevent="onFormSubmit">
        <div class="input-group">
          <span class="label">Number   </span>
          <input id="number" name="number" type="number"/>
          <button type="submit">Submit</button>
        </div>
      </form>

      <!-- result view -->
      <div class="result">
        <div class="header">Result</div>
        <div class="body">The difference is <span id="difference-result">--</span> </div>
        
      </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'App',
  mounted() {
    console.log(`the component is now mounted.`);
  },
  methods: {
    onFormSubmit (submitEvent) {
      let givenNumber = submitEvent.target.elements.number.value;
      
      // if number is empty
      if (givenNumber == "") alert("Number input cannot be empty!");

      // if number is neagtive
      if (givenNumber.includes("-")) alert("Only positive numbers are allowed!");


      // 1. reverse the number given
      let reversedNumber = this.reverseNumber(givenNumber);
      
      // 2. calculate the difference
      let differenceResult = this.calculateDifference(givenNumber, reversedNumber);

      // display result
      $("#difference-result").text(differenceResult);
    },
    reverseNumber(givenNumber) {
      let toArray = givenNumber.split("");
      let reverseArray = toArray.reverse();
      
      return reverseArray.join("");
    },
    calculateDifference(givenNumber, reversedNumber) {
      if (givenNumber > reversedNumber) {
        return givenNumber - reversedNumber;
      } else {
        return reversedNumber - givenNumber;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Form style */
.input-group{
  display: flex;
  justify-content: center;
}

.label{
  background: whitesmoke;
  border: 1px solid lightgray;
  border-radius: 5px 0px 0px 5px;
  padding: 5px;
  padding-right: 5px;
}

input{
  border: 1px solid lightgrey;
}


/* Result style */
.result{
  width: fit-content;
  margin: 20px auto;
}

.header{
  border: 1px solid lightgrey;
  border-radius: 5px 5px 0px 0px;
  background-color: whitesmoke;
  padding: 5px 0px;
}

.body {
  border: 1px solid lightgrey;
  border-radius: 0px 0px 5px 5px;
  padding: 5px;
  min-height: 70px;
}

#difference-result {
  font-weight: bolder;
  color: green;
  margin-top: 5px;
  display: block;
}
</style>
