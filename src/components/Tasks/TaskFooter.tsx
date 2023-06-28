import { useTask } from '../../context/TodoContext';
import { Task } from '../../interface/TasksInterface';
import ActionsButtons from './ActionButtons';
interface Props {
    tasks: Task[];
}
export default function TaskFooter({ tasks }: Props) {
    const { deleteAllTask } = useTask();
    return (
        <>
            <div className=" overflow-hidden rounded-b-lg  bg-veryLightGray  shadow-xl mt-2 mx-10 dark:bg-veryDarkDesaturated dark:shadow-2xl  ">
                <section className="h-[4rem] w-full ">
                    <div className="flex h-full items-center justify-between px-5   text-[0.8em] font-bold text-darkGrayishBlue dark:text-VeryDarkGrayishBlue md:text-[1rem]">
                        <p> {tasks.length} items left</p>
                        <div className="hidden md:flex">
                            <ActionsButtons />
                        </div>
                        <button
                            onClick={() => {
                                deleteAllTask();
                            }}
                            className="hover:text-red-500"
                        >
                            Clear Completed
                        </button>
                    </div>
                </section>
            </div>
            <div className=" mx-10  dark:shadow-2xl md:hidden ">
                <ActionsButtons />
            </div>

            <footer className="mx-10 mt-14 font-bold text-darkGrayishBlue dark:text-VeryDarkGrayishBlue md:text-[1.1rem]">
                Drag and drop to reoder list
            </footer>
        </>
    );
}
