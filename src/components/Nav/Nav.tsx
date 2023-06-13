import { useEffect } from 'react';

import DarkThemeIcon from '../../Icons/DarkThemeIcon';
import LightThemeIcon from '../../Icons/LightThemeIcon';

import { motion } from 'framer-motion';

interface Props {
    theme: string;
    changeDarkMode: () => void;
}

export default function Nav({ theme, changeDarkMode }: Props) {
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [theme]);

    return (
        <div>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.7, ease: 'backOut' }}
                className=" flex w-full  justify-between gap-5 px-10 text-darkBlueHover dark:text-darkBlueHover"
            >
                <h1 className="text-[2rem] font-bold tracking-[0.75rem] md:text-[2.5rem] lg:text-[2.5rem]  ">
                    TODO
                </h1>
                <button onClick={changeDarkMode}>
                    {theme === 'dark' ? (
                        <LightThemeIcon className="  dark:w-full dark:fill-white " />
                    ) : (
                        <DarkThemeIcon className="fill-veryLightGray " />
                    )}
                </button>
            </motion.nav>
        </div>
    );
}
