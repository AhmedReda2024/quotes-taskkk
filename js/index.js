var Quotes = [
  {
    quote: "Its not what happens to you, but how you react to it that matters.",
    author: "--Epictetus",
  },
  {
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    author: "--Nelson Mandela",
  },
  {
    quote: "The best revenge is massive success.",
    author: "--Frank Sinatra",
  },
  {
    quote: "Do not take life too seriously. You will not get out alive.",
    author: "--Elbert Hubbard",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "--Wayne Gretzy",
  },
];

/*
0
1
2
4
0


*/



var newIndex; //4   //3  //2

var lastIndex; //4  //3


var displayedQuotes = [];

function getQuotes() {


  if ( displayedQuotes.length == Quotes.length ) {
    displayedQuotes = [];
  }


  do {
    //4    //3   //2
    newIndex = Math.floor(Math.random() * Quotes.length);
  } while (newIndex == lastIndex   || displayedQuotes.includes(newIndex)  );

  lastIndex = newIndex;

  displayedQuotes.push(newIndex);

  console.log(newIndex);

  document.getElementById("quote").innerHTML = Quotes[newIndex].quote;
  document.getElementById("auther").innerHTML = Quotes[newIndex].author;
}
