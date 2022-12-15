import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AddProject from "../components/AddProject";
import { ProjectProvider } from "../context/ProjectContext";
import App from "../App";

test("renders correct", async () => {
    render(
        <ProjectProvider>
            <App>
                <AddProject />
            </App>
        </ProjectProvider>
    );


});
