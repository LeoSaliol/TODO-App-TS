import { AnimatePresence, Reorder } from 'framer-motion';
import { useTask } from '../../context/TodoContext';
import TaskItem from '../Tasks/Task';
import InputTask from '../Tasks/InputTask';
import TaskFooter from '../Tasks/TaskFooter';

export default function Main() {
    const { taskFilter, setTaskFilter } = useTask();

    return (
        <>
            {/* //! Input para crear tarea */}
            <InputTask />
            {/* //! Cuerpos donde se pintan las tareas */}
            <div className=" mx-10  overflow-hidden rounded-lg ">
                <div className="min-h-[90px] bg-veryLightGray dark:bg-veryDarkDesaturated dark:text-darkBlueHover">
                    {taskFilter.length > 0 ? (
                        <Reorder.Group
                            className="  dark:bg-veryDarkDesaturated dark:text-darkBlueHover"
                            axis="y"
                            values={taskFilter}
                            onReorder={setTaskFilter}
                        >
                            <AnimatePresence>
                                {taskFilter.map((item, index) => (
                                    <Reorder.Item key={item.id} value={item}>
                                        <TaskItem task={item} index={index} />
                                    </Reorder.Item>
                                ))}
                            </AnimatePresence>
                        </Reorder.Group>
                    ) : (
                        <p className="pt-[25px] text-[2rem] font-bold text-veryLightGrayishBlue">
                            No tasks
                        </p>
                    )}
                </div>
                {/* //! Footer Main */}
                <TaskFooter tasks={taskFilter} />
            </div>
        </>
    );
}
