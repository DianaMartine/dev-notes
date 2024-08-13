import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../../footer/footer";

describe("FooterComponent", () => {
    test("should create", () => {
        const { container } = render(<Footer />);
        expect(container).toBeTruthy();
    });
    test("should render children", () => {
        const { getByText } = render(<Footer>footer content</Footer>);
        expect(getByText("footer content")).toBeTruthy();
    });
    test("should render with bgColor", () => {
        const { container } = render(<Footer bgColor="red" />);
        expect(container.firstChild).toHaveStyle("background-color: red");
    });
    test("should render with textColor", () => {
        const { container } = render(<Footer textColor="blue" />);
        expect(container.firstChild).toHaveStyle("color: blue");
    });
});