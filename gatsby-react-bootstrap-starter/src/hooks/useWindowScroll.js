import { useMemo, useState } from 'react';

export default function useWindowScroll(ref) {
    const [scrollY, setScroll] = useState(0);
    useMemo(
        () => {
            if (ref) {
                window.addEventListener('scroll', function() {
                    setScroll(window.pageYOffset);
                });
            }
        }, [ref]
    );
    console.log(scrollY);
    return scrollY;
}