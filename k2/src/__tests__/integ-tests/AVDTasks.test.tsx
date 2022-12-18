import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./../../App";

import { setupServer } from "msw/node";
import { buildHandlers } from "./handlers";
import { ProjectProvider } from "./../../contexts/ProjContext";
import Projects from "./../../components/Projects";

const projectServer = setupServer(...buildHandlers());

beforeAll(() => projectServer.listen());
afterAll(() => projectServer.close());
describe("Projects", () => {
    it("Add view delete projects", async () => {
        render(
            <ProjectProvider>
                <App />
            </ProjectProvider>
        );

        await userEvent.click(screen.getAllByText("All tasks")[0]);
        expect(screen.getAllByText("All tasks")[0]).toHaveTextContent("All tasks");

        
        const taskDeleteButtons = await screen.findAllByTestId("taskDeleteButton");
        expect(taskDeleteButtons).toHaveLength(4);
        
        await userEvent.click(taskDeleteButtons[4]);

        // expect(items).toHaveLength(3);

        
    });
});
