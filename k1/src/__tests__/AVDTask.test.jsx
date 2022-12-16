import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ProjectProvider } from "../context/ProjectContext";
import App from "../App";
import AddTask from "../components/AddTask";
import Overview from "../pages/Overview";
import AddProject from "../components/AddProject";

import { setupServer } from "msw/node";
import { buildHandlers } from "./handlers";
import Navbar from "../components/Navbar";

const projectServer = setupServer(...buildHandlers());

beforeAll(() => projectServer.listen());
afterAll(() => projectServer.close());

describe("Tasks", () => {
    it("View tasks, Delete task", async () => {
        render(
            <ProjectProvider>
                <App>
                    <Overview>
                        <AddTask />
                        <Navbar />
                    </Overview>
                </App>
            </ProjectProvider>
        );

        // const testAddTask = "Testing add task";

        //Act
        await userEvent.click(screen.getAllByText("Tasks")[0]);
        await userEvent.click(screen.getByText("Create new task"));
        // Deletar task
        await userEvent.click(screen.getAllByText("x")[6]);
        const items = await screen.findAllByText("x");
        expect(items).toHaveLength(7);
        expect(screen.getAllByText("Title")[0]).toHaveTextContent("Title");
        const timer = screen.getByText("timer");
        expect(timer).toHaveTextContent("timer");

        screen.debug();
    });
});
