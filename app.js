const textBox = document.getElementById("input-text");
const word = document.getElementById("words");
const char = document.getElementById("char");

console.log(textBox);

textBox.addEventListener("input", () => {
  let text = textBox.value;
  console.log(text);
  let nchar = text.length;
  char.textContent = nchar;
  let nword = text.trim();
  let nnword = nword.split(" ");
  console.log(nnword);

  /* it will split the text in given inverted commas here space so after every space it is broken and stored in an array
    one problem here is that it consider the space given in before the first letter, if you keep giving space before it will keep spliting and the length will increase so we will use trim function 

    Trim function will remove spaces from starting and end of the string

    */

  // // This will only solve your proble of starting and ending space but not in the middle. so to remove the space in the middle you have to see the array
  // it is storing middle spaces so the size increases therefore remove that and we will get the length  we will filter the array

  let filterarray = nnword.filter((ele) => {
    return ele != "";
  });
  let nnnword = filterarray.length;
  word.textContent = nnnword;
});
