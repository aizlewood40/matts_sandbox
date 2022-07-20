import React from "react";
import { render } from "@testing-library/react";

import Test from "components/Test";

describe("Test", () => {
    it("renders as expected", () => {
        const { container } = render(<Test />);

        expect(container.querySelector(".container")).toBeInTheDocument();
        expect(container.querySelector(".container")?.innerHTML).toEqual("Hello World!");
    });
});

