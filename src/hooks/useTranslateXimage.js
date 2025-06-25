import useScrollHandling from '@/hooks/useScrollHandling';
import { useState, useEffect } from 'react';

const useTranslateXImage = () => {
    const { scrollPosition, scrollDirection } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

    useEffect(() => {
        handleTranslateX();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollPosition]);

    return {
        translateXPosition
    };
};

export default useTranslateXImage;