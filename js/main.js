 var arr=[
  {
    quote:
    "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
    auther:
    "― H. Jackson Brown Jr., P.S. I Love You",
  } , 
  {
    quote:
    "“It is better to be hated for what you are than to be loved for what you are not.”",
    auther:
    "― Andre Gide, Autumn Leaves",
  } , 
  {
    quote:
    "“Insanity is doing the same thing, over and over again, but expecting different results.”",
    auther:
    "― Narcotics Anonymous",
  },
  {
    quote:
    "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    auther:
    "― Oscar Wilde, The Happy Prince and Other Stories",
  }  ,
  {
    quote:
    "“We accept the love we think we deserve.”",
    auther:
    "― Stephen Chbosky, The Perks of Being a Wallflower",
  }  ,
  {
    quote:
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    auther:
    "― Mahatma Gandhi ",
  },
  {
    quote:
    "Oscar Wilde“To live is the rarest thing in the world. Most people exist, that is all.”",
    auther:
    "― Oscar Wilde",
  }  ,
  {
    quote:
    "“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”",
    auther:
    "― Albert Camus",
  }

];



 var prevnum;
function NewQuote(){

//   console.log(Math.random());
   
   var randomvalue = Math.trunc(Math.random() * arr.length);
   
   if(randomvalue == prevnum){
    randomvalue = (randomvalue + 1) % arr.length;
   }
   console.log(randomvalue);
    prevnum = randomvalue ;

document.getElementById("quote").innerHTML= arr[randomvalue].quote;
document.getElementById("auther").innerHTML= arr[randomvalue].auther;

}