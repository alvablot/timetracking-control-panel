import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { ProjectProvider } from "../../contexts/ProjContext";
import Projects from "../../components/Projects";

describe("Projects", () => {
    it("Add view delete projects", async () => {
        render(
            <ProjectProvider>
                <Projects />
            </ProjectProvider>
        );

        await userEvent.click(screen.getAllByText("Projects")[0]);
        expect(screen.getAllByText("Projects")[0]).toHaveTextContent("Projects");

        
    });
});
