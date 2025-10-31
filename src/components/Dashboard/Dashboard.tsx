import TaskList from "../TaskList/TaskList"


function Dashboard() {
    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-3xl font-bold">Task Manager Dashboard</h1>
            <div>
                <div> Stats</div>
                <div> 
                    <h3>Task List</h3>
                    <div>Completed Task: 10  </div>
                    <div>Pending Task: 5 </div>
                    <div>In Progress Task: 3 </div>

                </div>

                 <div> 
                    <h3>Recently Completed Tasks</h3>
                    <div>Task 1</div>
                    <div>Task 2</div>
                    <div>Task 3</div>

                </div>



            </div>


{<TaskList />}




        </div>
    )
}

export default Dashboard