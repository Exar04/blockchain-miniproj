const {expect} = require("chai")
const {ethers} = require("hardhat");
const { extendProvider } = require("hardhat/config");

describe("Task Contract", function(){
    let TaskContract;
    let taskContract;
    let owner;

    const NUM_TOTAL_TASKS = 5;
    
    let totalTasks;

    beforeEach(async function() {
        // TaskContract = await ethers.getContractFactory("TaskContract");
        TaskContract = await ethers.getContractFactory("TodoContract");
        [owner] = await ethers.getSigners()
        taskContract = await TaskContract.deploy()

        totalTasks = [];

        for(i = 0; i < NUM_TOTAL_TASKS; i++){
            let task = {
                'taskText' : 'Task number:- ' + i,
                'isDeleted': false
            }

            await taskContract.addTask(task.taskText, task.isDeleted);
            totalTasks.push(task)
        }

    })
    describe('Add Task', function() {
        it("should Emit AddTask event", async function () {
            let task = {
                'taskText' : 'new task',
                'isDeleted': false,
            }

            await expect(await taskContract.addTask(task.taskText, task.isDeleted)
        ).to.emit(taskContract, 'AddTask').withArgs(owner.address, NUM_TOTAL_TASKS)
        });
    });

    describe("Get All Tasks", function(){
        it("should return the corrent number of total tasks", async function(){
            const tasksFromChain = await taskContract.getMyTask();
            expect(tasksFromChain.length).to.equal(NUM_TOTAL_TASKS);
        })
    }) 

    describe("Delete Task", function(){
        it("should emit delete task event", async function(){
            const TASK_ID = 0; 
            const TASK_DELETED = true;

            await expect(
                taskContract.deleteTask(TASK_ID, TASK_DELETED)
            ).to.emit(
                taskContract, 'DeleteTask'
            ).withArgs(
                TASK_ID, TASK_DELETED
            )
        })
    })
})