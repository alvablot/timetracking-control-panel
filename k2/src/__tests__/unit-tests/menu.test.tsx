import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Menu from "../../components/Menu";
import { ProjectProvider } from "../../contexts/ProjContext";

describe("App", async () => {
    it("test render headline2", () => {
        render(
            <ProjectProvider>
                <Menu />
            </ProjectProvider>
        );

        expect(screen.getByText(/Overview/i)).toHaveTextContent("Overview");
        userEvent.click(screen.getByText(/Overview/i));

        expect(screen.getByText(/Projects/i)).toHaveTextContent("Projects");
        userEvent.click(screen.getByText(/Projects/i));

        expect(screen.getByText(/Tasks/i)).toHaveTextContent("Tasks");
        userEvent.click(screen.getByText(/Tasks/i));

        expect(screen.getAllByText("Last 30 days")[0]).toHaveTextContent("Last 30 days");
        userEvent.click(screen.getAllByText("Last 30 days")[0]);

        expect(screen.getAllByText("Last 30 days")[1]).toHaveTextContent("Last 30 days");
        userEvent.click(screen.getAllByText("Last 30 days")[1]);

        expect(screen.getAllByText("All")[0]).toHaveTextContent("All");
        userEvent.click(screen.getAllByText("All")[0]);

        expect(screen.getAllByText("All")[1]).toHaveTextContent("All");
        userEvent.click(screen.getAllByText("All")[1]);

        expect(screen.getByText(/Timelogs/i)).toHaveTextContent("Timelogs");
        userEvent.click(screen.getByText(/Timelogs/i));

        expect(screen.getByText(/Invoices/i)).toHaveTextContent("Invoices");
        userEvent.click(screen.getByText(/Invoices/i));

        expect(screen.getByText(/Create new/i)).toHaveTextContent("Create new");
        userEvent.click(screen.getByText(/Create new/i));

        screen.debug();
    });
});
