import { useRef, useEffect } from 'react'

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
    const ref = useRef<T>(null)

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref.current &&  !ref.current.contains(event.target)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref])
    return { ref }
}

export default useOutsideClick
