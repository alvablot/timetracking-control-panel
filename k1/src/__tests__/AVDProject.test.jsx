import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./../App";
import { ProjectProvider } from "../context/ProjectContext";
import Overview from "../pages/Overview";
import AddProject from "../components/AddProject";

import { setupServer } from "msw/node";
import { buildHandlers } from "./handlers";

const projectServer = setupServer(...buildHandlers());

beforeAll(() => projectServer.listen());
afterAll(() => projectServer.close());
describe("Projects", () => {
    it("Add view delete projects", async () => {
        render(
            <ProjectProvider>
                <App>
                    <Overview>
                        <AddProject />
                    </Overview>
                </App>
            </ProjectProvider>
        );

        const testAddproject = "Testing add project";

        //Act
        await userEvent.click(screen.getAllByText("Projects")[0]);
        await userEvent.click(screen.getByText("Create new project"));
        await userEvent.type(screen.getByTestId("inputField"), testAddproject);
        await userEvent.click(screen.getByText("Add project"));

        await userEvent.click(screen.getAllByText("Create new project")[0]);
        // Deletar project
        await userEvent.click(screen.getByTestId(/Testing add project/i));
        const items = await screen.findAllByText("x");
        expect(items).toHaveLength(4);
        expect(screen.getAllByText("Testing add project")[0]).toHaveTextContent("Testing add project");
    });
});
