import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./../../App";

import { setupServer } from "msw/node";
import { buildHandlers } from "./handlers";
import { ProjectProvider } from "./../../contexts/ProjContext";

import CreateInvoice from "./../../components/CreateInvoice";

const projectServer = setupServer(...buildHandlers());

beforeAll(() => projectServer.listen());
afterAll(() => projectServer.close());

describe("Projects", () => {
    it("Add view delete invoices", async () => {
        render(
            <ProjectProvider>
                <App />
            </ProjectProvider>
        );

        await userEvent.click(screen.getAllByText("Create new")[0]);
        expect(screen.getAllByText("Create invoice")[0]).toHaveTextContent("Create invoice");

        const invoiceProjectOptions = await screen.findAllByTestId("invoiceProjectOption");
        expect(invoiceProjectOptions).toHaveLength(3);

        const projectSelect = await screen.findByTestId("projectSelect");
        userEvent.selectOptions(
            projectSelect,
            invoiceProjectOptions[1]
        );
        
        const invoiceTaskOptions = await screen.findAllByTestId("invoiceTaskOption");
        expect(invoiceTaskOptions).toHaveLength(4);

        const taskSelect = await screen.findByTestId("taskSelect");
        userEvent.selectOptions(
            taskSelect,
            invoiceTaskOptions[1]
        );

        const customers = await screen.findAllByTestId("Add Invoice");
        await userEvent.type(customers[0], "Test customer");

        const saves = await screen.findAllByTestId("Save Invoice");
        await userEvent.click(saves[0]);

        await userEvent.click(screen.getAllByText("All")[3]);
        expect(screen.getAllByText("Invoices")[0]).toHaveTextContent("Invoices");

        const deleteInvoiceButtons = await screen.findAllByTestId("Test customer");
        await userEvent.click(deleteInvoiceButtons[0]);

        screen.debug();        
    });
});
