import { useTask } from '../../context/TodoContext';

export default function ActionsButtons() {
    const { getActive, getCompleted, getTaks, activeFilter } = useTask();

    return (
        <section className="mt-7 h-[3.6rem] rounded-lg bg-veryLightGray shadow-xl dark:bg-veryDarkDesaturated md:mt-0  md:h-[4rem] md:rounded-none md:shadow-sm ">
            <div className=" ml-3 flex h-full items-center justify-center gap-6 text-[1.2em] font-bold text-darkGrayishBlue dark:text-VeryDarkGrayishBlue  md:text-[1rem]">
                <button
                    onClick={getTaks}
                    className={`hover:text-brightBlue  ${
                        activeFilter === 'all' && 'text-backViolet'
                    } `}
                >
                    All
                </button>
                <button
                    onClick={getActive}
                    className={`hover:text-brightBlue ${
                        activeFilter === 'active' && 'text-backViolet'
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={getCompleted}
                    className={`hover:text-brightBlue ${
                        activeFilter === 'completed' && 'text-backViolet'
                    }`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
}
