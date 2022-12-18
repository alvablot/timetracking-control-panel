import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header1 from "../../components/Header1";

describe("App", async () => {
    it("test render headline", () => {
        render(<Header1 text="Overview" />);

        expect(screen.getByText(/Overview/i)).toHaveTextContent("Overview");
        screen.debug();

        
    });
});
