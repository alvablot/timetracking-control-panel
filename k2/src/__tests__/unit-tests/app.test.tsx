import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../../App";
import { ProjectProvider } from "../../contexts/ProjContext";

describe("Check if App renders", async () => {
    it("renders app", () => {
        render(
            <ProjectProvider>
                <App />
            </ProjectProvider>
        );

        screen.debug();
    });
});