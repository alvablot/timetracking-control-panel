import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ProjectProvider } from "../context/ProjectContext";
import App from "../App";
import AddTimer from "../components/AddTimer";

import { setupServer } from "msw/node";
import { buildHandlers } from "./handlers";
import Navbar from "../components/Navbar";
import Timer from "../pages/Timer";

const projectServer = setupServer(...buildHandlers());

beforeAll(() => projectServer.listen());
afterAll(() => projectServer.close());

describe("Timer", () => {
    it("Timer", async () => {
        render(
            <ProjectProvider>
                <App>
                    <Timer />
                    <AddTimer />
                </App>
            </ProjectProvider>
        );
        // const timer = await screen.findByText("Timer");
        // expect(timer).toHaveTextContent("Timer");

        screen.debug();

        // check if App components renders headline
    });
});
