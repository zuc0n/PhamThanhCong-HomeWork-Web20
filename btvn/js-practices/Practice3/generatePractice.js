'use strict'

function generate(testLengthArray){
  // // return Array.from({length : testLengthArray.length})
  // //   .map(item => ({
  // //     input: Array.from({length: item}).map(item => []),
  // //     target: 0,
  // //     output: -1
  // //   })
  // // ); // Remove this line and change to your own algorithm

  // var array = [];
  // for( let i = 0; i < testLengthArray.length; i++){
  //   let object = {}
  //   object.input = []
  //   for(let n = 0; n <testLengthArray[i];n++){
  //     object.input[n] = Math.floor(Math.random()*20000 - 10000);
  //   }

  //   object.input = object.input.sort((a,b) => a - b);
  //   object.target = object.input[Math]
  //   object.output = object.input.indexOf(object.input,object.target);
  //   array.push(object);
  // }

  return testLengthArray.map(function(itemInputLength){
    let newItem = {
      input: [],
      output: null,
      target: null,
    }

    newItem.input = new Array(itemInputLength).map(function(){
      return Math.floor(Math.random()*20000 - 10000);
    })
  });
}


module.exports = generate
