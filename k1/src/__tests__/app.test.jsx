import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./../App";
import { ProjectProvider } from "../context/ProjectContext";

test("renders correct", async () => {
    render(
        <ProjectProvider>
            <App />
        </ProjectProvider>
    );

    expect(true).toBe(true);
});
