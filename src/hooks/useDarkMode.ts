import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    const [theme, setTheme] = useState<string>(
        document.documentElement.className
    );
    const changeDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setTheme('light');
        }
    }, [theme]);

    return {
        changeDarkMode,
        theme,
    };
};
