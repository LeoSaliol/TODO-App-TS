import { motion } from 'framer-motion';

import { useTask } from '../../context/TodoContext';

export default function InputTask() {
    const { task, handleSubmit, handleChange } = useTask();
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            animate={{ transition: { duration: 2 } }}
            layout
            className="mx-10 mt-9 mb-7 flex  items-center gap-3 overflow-hidden rounded-xl bg-veryLightGray dark:border-[1px] dark:border-none   dark:border-VeryDarkGrayishBlue dark:bg-veryDarkDesaturated  md:rounded-lg "
        >
            <button className="ml-5 mr-2 rounded-full border-2 border-lightGrayishBlue p-3 dark:border-veryDarkGrayishBlue"></button>
            <form
                onSubmit={handleSubmit}
                className="w-full md:h-[4.2rem] "
            >
                <input
                    type="text"
                    className="mr-3 mt-1 h-12 w-full outline-none  placeholder:text-VeryDarkGrayishBlue dark:placeholder:text-darkGrayishBlueDark dark:bg-inherit dark:text-darkBlueHover md:h-14"
                    placeholder="Create a new todo..."
                    value={task}
                    onChange={handleChange}
                />
            </form>
        </motion.div>
    );
}
