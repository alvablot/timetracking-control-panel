import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../../App";
import { ProjectProvider } from "../../contexts/ProjContext";
import Invoices from "../../components/Invoices";

describe("Check invoices", async () => {
    it("renders app", () => {
        render(
            <ProjectProvider>
                <Invoices />
            </ProjectProvider>
        );
        expect(screen.getAllByText("Invoices")[0]).toHaveTextContent("Invoices");
        screen.debug();
    });
});
