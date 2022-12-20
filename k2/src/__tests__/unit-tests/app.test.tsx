import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../../App";
import { ProjectProvider } from "../../contexts/ProjContext";

describe("Check App", async () => {
    it("renders app", () => {
        render(
            <ProjectProvider>
                <App />
            </ProjectProvider>
        );
        expect(screen.getAllByText("Overview")[0]).toHaveTextContent("Overview");
        screen.debug();
    });
});
