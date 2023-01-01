import { useState } from 'react';
import './App.css';

function App() {
  //properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  //helper functions
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResults(true)
    }
  }

  const restartGame = () => {
    setScore(0)
    setCurrentQuestion(0)
    setFinalResults(false)
  }

  const questions = [
    {
      text: "KKTC'nin başkenti neresidir?",
      options: [
        { id: 0, text: "Gazimağusa", isCorrect: false },
        { id: 1, text: "Lefke", isCorrect: false },
        { id: 2, text: "Girne", isCorrect: false },
        { id: 3, text: "Lefkoşa", isCorrect: true },
      ],
    },
    {
      text: "Allahüekber dağları Türkiye'nin hangi bölgesindedir?",
      options: [
        { id: 0, text: "Doğu Anadolu Bölgesi", isCorrect: true },
        { id: 1, text: "Akdeniz Bölgesi", isCorrect: false },
        { id: 2, text: "Güneydoğu Anadolu Bölgesi", isCorrect: false },
        { id: 3, text: "Karadeniz Bölgesi", isCorrect: false },
      ],
    },
    {
      text: "Tuz Gölünün hangi illerimizde kıyısı yoktur?",
      options: [
        { id: 0, text: "Niğde", isCorrect: true },
        { id: 1, text: "Konya", isCorrect: false },
        { id: 2, text: "Ankara", isCorrect: false },
        { id: 3, text: "Aksaray", isCorrect: false },
      ],
    },
    {
      text: "Alüvyon hangisiyle alakalı bir terimdir?",
      options: [
        { id: 0, text: "Dağ", isCorrect: false },
        { id: 1, text: "Akarsu", isCorrect: true },
        { id: 2, text: "Hava", isCorrect: false },
        { id: 3, text: "Deprem", isCorrect: false },
      ],
    },
    {
      text: "Hangi iki ilimiz komşudur?",
      options: [
        { id: 0, text: "İstanbul - Yalova", isCorrect: false },
        { id: 1, text: "Rize - Erzurum", isCorrect: true },
        { id: 2, text: "Çorum - Ankara", isCorrect: false },
        { id: 3, text: "Kırıkkale - Nevşehir", isCorrect: false },
      ],
    },
  ];


  return (
    <div className="App">
      {/* 1.Header */}
      <h1>Coğrafya Testi</h1>


      {/* 2.Current Score */}
      <h2>Doğru cevap:{score}</h2>


      {showFinalResults ?

        <div className='final-result'>
          <h1>Sonuçlar</h1>
          <h2> {questions.length} sorudan, {score} doğru cevap - ({(score / questions.length) * 100}%)</h2>
          <button onClick={restartGame}>Tekrar çöz</button>
        </div> :



        <div className='question-card'>
          <h2>Soru: {currentQuestion + 1} Soru sayısı: {questions.length}</h2>
          <h3 className='question-text'>{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              )
            })}
          </ul>

        </div>
      }

    </div>
  );
}

export default App;
