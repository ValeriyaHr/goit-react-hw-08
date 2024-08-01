import css from "./HomePage.module.css";
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const randomQuote = async () => {
      try {
        const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"));
    
        const data = await response.json();
       // console.log(data.contents);
        const quoteObj = JSON.parse(data.contents);
       // console.log(quoteObj);
        document.getElementById("quote").innerHTML = '"'+quoteObj.quoteText+'"';
        document.getElementById("author").innerHTML = quoteObj.quoteAuthor || "Unknown"; // Вставляємо "Unknown" якщо автор не вказаний
      } catch (error) {
        //console.error("Error fetching the quote:", error);
      }
    };

    randomQuote();
  }, []);

  return (
    <div className={css.mainTitle}>
      <h1>Welcome</h1> 
      <h3 id="quote"></h3>
      
      <h4 id="author"></h4>
    </div>
  );
};
 

export default HomePage;