import React from "react";
export default function Ten()
{
    let quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.","The way to get started is to quit talking and begin doing.", 
         "The future belongs to those who believe in the beauty of their dreams.", 
         "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", 
         "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success", 
         "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.", "You must be the change you wish to see in the world.",
        "The only thing we have to fear is fear itself."];
    const index = Math.floor(Math.random()*quotes.length);
    let quote = quotes[index];
  return(
  <div>
    {quote}
  </div>
  )
}