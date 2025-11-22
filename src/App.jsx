import React, { useEffect } from 'react';
import AOS from 'aos';
import AppRouter from './routes/AppRouter.jsx';

export default function App() {
    useEffect(() => {
        AOS.init({ once: true, duration: 800, easing: 'ease-out' });
    }, []);

    return <AppRouter />;
}
