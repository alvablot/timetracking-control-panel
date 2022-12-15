import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header1 from "../components/Header1";

describe("App", async () => {
    it("renders headline", () => {
        render(<Header1 text="Overview" />);

        screen.debug();

        // check if App components renders headline
    });
});
