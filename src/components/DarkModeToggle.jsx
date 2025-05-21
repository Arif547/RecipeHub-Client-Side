import { useEffect, useState } from 'react';

function DarkModeToggle() {
    const [isDark, setIsDark] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            className="btn"
            onClick={() => setIsDark(!isDark)}
        >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;
