var quoteOutput=document.getElementById('quoteOutput');
var authorOutput=document.getElementById('authorOutput');

var quotesContainer=[
    {
        quoteOutput:"“ You know you're in love when you can't fall asleep because reality is finally better than your dreams. ”",
        authorOutput:" ― Dr. Seuss"
    },
    {
        quoteOutput:"“Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .”",
        authorOutput: " ― C.S. Lewis, The Four Loves"
    },
    {
        quoteOutput:"“If you tell the truth, you don't have to remember anything.”",
        authorOutput: " ― Mark Twain"
    },
    {
        quoteOutput:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        authorOutput: " ― Maya Angelou"
    },
    {
        quoteOutput:"“A friend is someone who knows all about you and still loves you.”",
        authorOutput: "― Elbert Hubbard"
    },
    {
        quoteOutput:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        authorOutput: " ― Mahatma Gandhi"
    },
    {
        quoteOutput:"“We accept the love we think we deserve.”",
        authorOutput: " ― Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        quoteOutput:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        authorOutput: " ― Ralph Waldo Emerson"
    },
    {
        quoteOutput:"“Insanity is doing the same thing, over and over again, but expecting different results.”",
        authorOutput: " ― Narcotics Anonymous"
    },
    {
        quoteOutput:"“It is better to be hated for what you are than to be loved for what you are not.”",
        authorOutput: " ― Andre Gide Autumn Leaves"
    }
]


function getRandomQuote(){
   var randomIndex=Math.floor(Math.random()*quotesContainer.length)
   var currentQuote = quotesContainer[randomIndex];
   document.getElementById('quoteOutput').innerHTML=currentQuote.quoteOutput
   document.getElementById('authorOutput').innerHTML=currentQuote.authorOutput
}