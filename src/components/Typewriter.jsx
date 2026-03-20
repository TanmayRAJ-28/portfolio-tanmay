import { useState, useEffect } from "react";

const Typewriter = ({ words = [], speed = 100, deleteSpeed = 50, pause = 2000 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    if (isPausing) return;

    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, text.length + 1);
        setText(nextText);
        if (nextText === currentWord) {
          setIsPausing(true);
          setTimeout(() => {
            setIsPausing(false);
            setIsDeleting(true);
          }, pause);
        }
      } else {
        const nextText = currentWord.slice(0, text.length - 1);
        setText(nextText);
        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause, isPausing]);

  return (
    <span>
      <span style={{
        background: "linear-gradient(90deg, #00d4ff, #7b2fff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: 600,
      }}>
        {text}
      </span>
      <span style={{
        color: "#00d4ff",
        fontWeight: 300,
        animation: "blink 1s step-end infinite",
        marginLeft: "2px",
      }}>|</span>
    </span>
  );
};

export default Typewriter;
