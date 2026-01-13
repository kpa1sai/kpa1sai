
import { useState, useEffect } from 'react';

interface TypingTextProps {
    texts: string[];
    speed?: number;
    delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ texts, speed = 100, delay = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = texts[currentTextIndex];

            if (isDeleting) {
                setDisplayedText(prev => prev.slice(0, -1));
            } else {
                setDisplayedText(prev => currentFullText.slice(0, prev.length + 1));
            }

            if (!isDeleting && displayedText === currentFullText) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex, texts, speed, delay]);

    return (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {displayedText}
            <span className="typing-cursor" />
        </span>
    );
};

export default TypingText;
