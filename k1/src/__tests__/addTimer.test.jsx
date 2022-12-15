import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ProjectProvider } from "../context/ProjectContext";
import App from "../App";
import AddTimer from "../components/AddTimer";

describe("App", () => {
    it("renders headline", () => {
        render(
            <ProjectProvider>
                <App>
                    <AddTimer />
                </App>
            </ProjectProvider>
        );

        screen.debug();

        // check if App components renders headline
    });
});