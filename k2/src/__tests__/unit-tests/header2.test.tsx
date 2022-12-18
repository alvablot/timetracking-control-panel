import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header2 from "../../components/Header2";

describe("App", async () => {
    it("test render headline2", () => {
        render(<Header2 text="headline2" />);

        expect(screen.getByText(/headline2/i)).toHaveTextContent("headline2");
        screen.debug();

        
    });
});
