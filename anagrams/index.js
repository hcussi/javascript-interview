/*

Problem Statement:
-----------------

If I give you a text file with all of the words from an English language dictionary, one word per line, how would you find all the anagrams in that text file?
Anagrams are words spelled with the same letters but in a different order, like "act" and "cat," "dog" and
"god," or "rat," "art," and "tar."

var dictionary = ["act","cat","dog","god","rat","art","tar","tac"];

One example of an acceptable output (there are other acceptable outputs):
[["act","cat"],["dog","god"],["rat","art","tar"]]

The words in the groups do not need to be sorted.


I'll show you another algorithm, and I'd like to discuss how is compares to the one your came up with:

In this algorithm, we will count the frequency of each word's letters and use that as a hash key. The values will be the words themselves.
So for “cat,” the key would be “1-0-1, 16 zeros, and a 1”, because t is the 20th letter in the alphabet. When you get to “act,” it is has
the same letters and counts so that you would put it next to “cat” under the same key. Once you’ve created this for all the words, finding
the anagrams requires iterating through every hash key with more than one word.

         abcdefghijklmnopqrstuvwxyz
cat  ->  10100000000000000001000000
dog  ->  00010010000000100000000000
pass ->  10000000000000010020000000

O(n)

More, Less, or Same Efficiency?

Do you think it would be easier, or harder to maintain code wise?

Are you ready to try and implement one of the algorithms?  Please remember you can use
any langauge you like, use whatever language is more comfortable for you!

Feel free to execute this code as many times as you need to.  I do not care about errors in the console, syntax errors, etc.
*/

const dictionary = ["act","cat","dog","pass","god","rat","ssap","art","tar","apss"];
/*
 {
  hash: [anagrams]
  ...
 }
*/
var result = {};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const hash = (word) => {
  let hashResp = "";
  for (const letter of alphabet) {
    const matchRes = word.match(new RegExp(`${letter}`, "g")); // returns [..] or null
    hashResp += (matchRes && `${matchRes.length}`) || "0";
  }

  return hashResp;
}

dictionary.forEach((word) => {
  const hashWord = hash(word);
  if (result[hashWord]) {
    result[hashWord].push(word);
  } else {
    result[hashWord] = [ word ];
  }
});

// [["act","cat"],["dog","god"],["rat","art","tar"]]
const resultArray = Object.values(result);
console.log(resultArray);
