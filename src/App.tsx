import { TodoContextPovider } from './context/TodoContext';

import bgMobDark from './assets/bg-mobile-dark.jpg';
import bgMobLight from './assets/bg-mobile-light.jpg';
import bgDesLight from './assets/bg-desktop-light.jpg';
import bgDesDark from './assets/bg-desktop-dark.jpg';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
    const { changeDarkMode, theme } = useDarkMode();
    return (
        <TodoContextPovider>
            <main className="">
                <div className=" dark:bg-veryDarkBlue">
                    <div className=" absolute w-full dark:bg-veryDarkBlue ">
                        <img
                            src={`${theme === 'dark' ? bgMobDark : bgMobLight}`}
                            alt=""
                            className=" h-[250px] w-full md:hidden "
                        />
                        <img
                            src={`${theme === 'dark' ? bgDesDark : bgDesLight}`}
                            alt=""
                            className=" hidden h-[275px] w-full object-cover  md:block"
                        />
                    </div>
                    <section className=" relative z-20 flex w-full justify-center text-center    ">
                        <div className="w-[90%] pt-12 sm:w-[80%] md:max-w-[70%] lg:max-w-[715px] ">
                            <Nav
                                theme={theme}
                                changeDarkMode={changeDarkMode}
                            />
                            <Main />
                        </div>
                    </section>
                </div>
                <div className=" mt-16 pb-10 text-center text-[0.9rem] dark:text-veryLightGrayishBlue ">
                    Challenge by{' '}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        className="font-bold dark:text-darkBlueHover"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{' '}
                    <a
                        className="font-bold dark:text-darkBlueHover"
                        href="https://portfoliosaliol.web.app/"
                        target="_blank"
                    >
                        Leonel M. Saliol
                    </a>
                    .
                </div>
            </main>
        </TodoContextPovider>
    );
}

export default App;
