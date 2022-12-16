
import { rest } from "msw";
export function buildHandlers() {
    const testProjects = [
        {
            name: "Laga mat",
            color: "#e3da3b",
            id: 1,
            price: 200,
        },
        {
            name: "Städa",
            color: "#af3bee",
            id: 2,
            price: 400,
        },
        {
            name: "Koda",
            color: "#fb3a64",
            price: 2600,
            id: 3,
        },
    ];
    const testTasks = [
        {
            date: "2022-10-20",
            projectId: 1,
            title: "Pizza",
            start: 0,
            end: 0,
            timeElapsed: 0,
            active: false,
            id: 1,
        },
        {
            date: "2022-10-23",
            projectId: 1,
            title: "Lasagne",
            start: 0,
            end: 6,
            timeElapsed: 666,
            active: false,
            id: 2,
        },
        {
            date: "2022-10-23",
            projectId: 2,
            title: "Toa",
            start: 0,
            end: 5,
            timeElapsed: 10000,
            active: false,
            id: 3,
        },
        {
            date: "2022-12-15",
            projectId: 1,
            title: "Title",
            start: 0,
            end: 0,
            timeElapsed: 0,
            active: false,
            id: 9,
        },
    ];
    const testTimelogs = [
        {
            taskId: 1,
            timeElapsed: "00:00:10",
            date: "2022-10-20",
            id: 1,
        },
        {
            taskId: 2,
            timeElapsed: "00:00:06",
            date: "2022-10-23",
            id: 2,
        },
        {
            taskId: 1,
            timeElapsed: "00:00:10",
            date: "2022-12-15",
            id: 6,
        },
        {
            taskId: 1,
            timeElapsed: "00:00:00",
            date: "2022-12-15",
            id: 7,
        },
    ];
    return [
        rest.get("http://localhost:3000/projects", (req, res, ctx) => {
            return res(ctx.json(testProjects));
        }),
        rest.get("http://localhost:3000/tasks", (req, res, ctx) => {
            return res(ctx.json(testTasks));
        }),
        rest.get("http://localhost:3000/timelogs", (req, res, ctx) => {
            return res(ctx.json(testTimelogs));
        }),
        rest.delete("http://localhost:3000/projects", (req, res, ctx) => {
            return res(ctx.json(testProjects));
        }),
        rest.delete("http://localhost:3000/tasks", (req, res, ctx) => {
            return res(ctx.json(testTasks));
        }),
        rest.delete("http://localhost:3000/timelogs", (req, res, ctx) => {
            return res(ctx.json(testTimelogs));
        }),
    ];
}
