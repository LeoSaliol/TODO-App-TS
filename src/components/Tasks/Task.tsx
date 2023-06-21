import { motion } from 'framer-motion';
import IconsCheck from '../../assets/icon-check.svg';
import CrossIcon from '../../Icons/CrossIcon';
import { useTask } from '../../context/TodoContext';
import { Task } from '../../interface/TasksInterface';

interface Props {
    task: Task;
    index: number;
}

const variants = {
    hidden: {
        x: -650,
        transition: {
            duration: 0.5,
        },
    },
    visible: ({ delay }: any) => ({
        x: 0,
        transition: {
            duration: 0.5,
            delay,
        },
    }),
};
export default function TaskItem({ task, index }: Props) {
    const { deleteTask, completedTask } = useTask();

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={{ delay: (index + 1) * 0.2 }}
            layoutId={task.id}
            whileHover={{ scale: 1.01 }}
            className="flex h-14  items-center gap-2 border-b-[1px] border-lightGrayishBlue bg-veryLightGray py-2 dark:border-VeryDarkGrayishBlue dark:bg-veryDarkDesaturated md:h-[4.2rem]"
        >
            <button
                onClick={() => {
                    completedTask(task);
                }}
            >
                <div
                    className={`ml-5 mr-2 rounded-full border-2 border-lightGrayishBlue ${
                        task.completed &&
                        'bg-gradient-to-tl from-backLightBlue to-backViolet'
                    }  py-2 px-2 dark:border-veryDarkGrayishBlue`}
                >
                    <img
                        src={IconsCheck}
                        alt="Check icon"
                        className={`w-4  ${
                            task.completed ? 'opacity-1' : 'opacity-0'
                        }`}
                    />
                </div>
            </button>
            <p
                className={`mt-1 mr-auto text-[1em] capitalize ${
                    task.completed && 'line-through'
                } `}
            >
                {task.task}
            </p>
            <button
                onClick={() => {
                    deleteTask(task);
                }}
            >
                <CrossIcon className=" mr-5  fill-[#494C6B] transition-all duration-[0.5s] hover:scale-150 hover:fill-red-500" />
            </button>
        </motion.div>
    );
}
