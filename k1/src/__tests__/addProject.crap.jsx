import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AddProject from "../components/AddProject";
import { ProjectProvider } from "../context/ProjectContext";
import App from "../App";

test("renders correct", async () => {
    //Arrange
    render(
        <ProjectProvider>
            <App>
                <AddProject />
            </App>
        </ProjectProvider>
    );
    // const testAddproject = "Testing add project";

    // //Act
    // await userEvent.click(screen.getByText("Create new project"));
    // await userEvent.type(screen.getByTestId("inputField"), testAddproject);
    // await userEvent.click(screen.getByText("Add project"));
    

    //Assert
    // expect(screen.getAllByText(/Laga mat/i)).toHaveTextContent("Laga mat");
});