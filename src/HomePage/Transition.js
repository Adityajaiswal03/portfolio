import { useState, useEffect } from "react";
import "./Transition.css"
function Typewriter({ texts, typingSpeed = 150, pauseDuration = 2000 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;

        if (isTyping) {
            if (displayedText.length < texts[currentIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        texts[currentIndex].slice(0, displayedText.length + 1)
                    );
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, pauseDuration);
            }
        } else {
            timeout = setTimeout(() => {
                setDisplayedText("");
                setIsTyping(true);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, pauseDuration);
        }

        return () => clearTimeout(timeout);
    }, [
        displayedText,
        isTyping,
        currentIndex,
        texts,
        typingSpeed,
        pauseDuration,
    ]);

    return (
        <div className="Typewriter">
            <div className="Typewriter__wrapper">{displayedText}</div>
            <div className="Typewriter__cursor">|</div>
        </div>
    );
}

function App() {
    return (
        <main className="main">
            <div className="react-reveal">
                <div style={{ flexDirection: "row", display: "flex" }}>
                    <h2 style={{ display: "inline-block" }}>I'm&nbsp;</h2>
                    <Typewriter texts={["a Freelancer", "a Developer"]} />
                </div>
            </div>
        </main>
    );
}

export default App;
