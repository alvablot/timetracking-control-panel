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

        await userEvent.click(screen.getAllByText("Projects")[0]);
        expect(screen.getAllByText("Projects")[0]).toHaveTextContent("Projects");

        const projectDeleteButtons = await screen.findAllByTestId("projectDeleteButton");

        expect(projectDeleteButtons).toHaveLength(3);

        await userEvent.click(projectDeleteButtons[3]);

        const projectDeleteButtons2 = await screen.findAllByTestId("projectDeleteButton");
        expect(projectDeleteButtons2).toHaveLength(3);
        //expect(projectDeleteButtons).toHaveLength(2);
        screen.debug();
    });
});
