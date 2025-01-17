/*
Given an array (arr) as an argument complete the function 
countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
  Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
  A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
  Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example:
  countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
  countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
  countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note:
  In case of an empty array return 0. 
  You will not be tested with invalid input (input will always be an array). 
  Order of the face (eyes, nose, mouth) elements will always be the same.
*/


// Solution

function countSmileys(arr) {
  let smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
  let count = 0;
  
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<smileys.length; j++){
      if (arr[i]===smileys[j]){
        count++;
      }
    }
    }
  return count;
}

// or


const smileyIsValid = smiley => 
  smiley.length === 3 || smiley.length === 2

const smileyHasValidEye = smiley => {
  const maybeEye = smiley.charAt(0)
  return maybeEye === ':' || maybeEye === ';'
}

const smileyHasNose = smiley =>
  smiley.length === 3

const smileyHasValidNose = smiley => {
  const maybeNose = smiley.charAt(1)
  return smileyHasNose(smiley) ? maybeNose === '-' || maybeNose === '~' : true
}

const smileyHasValidMouth = smiley => {
  const maybeMouth = smileyHasNose(smiley) ? smiley.charAt(2) : smiley.charAt(1)
  return maybeMouth === ')' || maybeMouth === 'D'
}

//return the total number of smiling faces in the array
const countSmileys = smileys => 
  smileys.filter(smiley => 
    smileyIsValid(smiley) &&
    smileyHasValidEye(smiley) &&
    smileyHasValidNose(smiley) &&
    smileyHasValidMouth(smiley)
  ).length