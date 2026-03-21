import { useEffect,useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState('online');

    useEffect(() => {
        const handleOnline = () => setIsOnline('online');
        const handleOffline = () => setIsOnline('offline');

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    });

    return isOnline === 'online';
}

export default useOnline;