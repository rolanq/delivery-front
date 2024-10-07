import { useEffect, useRef } from "react";

export function usePreventCollapse() {
    const elRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const preventCollapse = () => {
                if (window.scrollY === 0) {
                    window.scrollTo(0, 1);
                }
            }
            el.addEventListener("touchstart", preventCollapse);
            return () => el.removeEventListener("touchstart", preventCollapse);
        }
    }, []);
    return elRef;
}