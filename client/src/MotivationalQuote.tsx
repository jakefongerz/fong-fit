import React, { useState, useEffect } from 'react';

const MotivationalQuote: React.FC = () => {
  const [quote, setQuote] = useState<string>('Loading a motivational quote...');

  // Array of motivational quotes
  const quotes = [
    "Focus on the basics and the consistency of food and training before absolutely anything. - Chris Bumstead",
    "You’re not entitled to anything. You can’t expect anything. You just have to work your absolute hardest. - Chris Bumstead",
    "I have this thing; I say 'champion mentality'. It’s not about winning, it’s not about trophies – it’s about having no quit and giving everything you have. - Chris Bumstead",
    "Hard work beats talent when talent doesn’t work hard. - Tim Notke",
    "I’ve failed over and over and over again in my life, and that is why I succeed. - Michael Jordan",
    "Success is where preparation and opportunity meet. - Bobby Unser",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Gold medals aren’t really made of gold. They’re made of sweat, determination, and a hard-to-find alloy called guts. - Dan Gable",
    "Don’t count the days; make the days count. - Muhammad Ali",
    "The only way to prove that you’re a good sport is to lose. - Ernie Banks",
    "You can’t put a limit on anything. The more you dream, the farther you get. - Michael Phelps",
    "It’s not whether you get knocked down; it’s whether you get up. - Vince Lombardi",
    "You have to expect things of yourself before you can do them. - Michael Jordan",
    "Champions keep playing until they get it right. - Billie Jean King",
    "Pain is temporary. Quitting lasts forever. - Lance Armstrong",
    "I don’t count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count. - Muhammad Ali",
    "Winning isn’t everything, but wanting to win is. - Vince Lombardi",
    "Do not let what you cannot do interfere with what you can do. - John Wooden",
    "The difference between the impossible and the possible lies in a person’s determination. - Tommy Lasorda",
    "What makes something special is not just what you have to gain, but what you feel there is to lose. - Andre Agassi"
  ];
  

  useEffect(() => {
    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []); // Empty dependency array to run once on component mount

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1></h1>
      <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>{quote}</p>
    </div>
  );
};

export default MotivationalQuote;
