        // Bai 5: Tra loi cau hoi //
import { useState } from "react";
function QuizApp() {
    const questions = [
        {
            question: "Trai dat hinh gi?",
            options: ["Hinh cau", "Hinh vuong", "Hinh chu nhat", "Hinh tam giac"],
            answer: "Hinh cau"
        },
        {
            question: "mot cong mot bang?",
            options: ["1", "2", "3", "4"],
            answer: "2"
        },
        {
            question: "1453 x 9853 = ?",
            options: ["2", "3", "1", "14.317.862"],
            answer: "14.317.862"
        }
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div>
            {showScore ? (
                <div>
                    Ban tra loi dung {score} / {questions.length}
                </div>
            ) : (
                <div>
                    <div>
                        <span>Cau hoi {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div>
                        {questions[currentQuestion].question}
                    </div>
                    <div>
                        {questions[currentQuestion].options.map((option) => (
                            <button key={option} onClick={() => handleAnswerOptionClick(option)} style={{ margin: 8 }}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default QuizApp;