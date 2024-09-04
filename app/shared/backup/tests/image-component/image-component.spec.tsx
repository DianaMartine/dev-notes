import React from "react";
import { render } from "@testing-library/react";
import { ImageComponent } from "../../image-component/image-component";
import type { ImageComponentProps } from "../../types";

const defaultProps: ImageComponentProps = {
    src: "https://img.shields.io/badge/React-blue",
    alt: "react",
    width: "100",
    height: "100",
};

describe("ImageComponent", () => {
    test("should create", () => {
        const { container } = render(<ImageComponent {...defaultProps} />);
        expect(container).toBeTruthy();
    });
    test("should render image with src", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toBeTruthy();
    });
    test("should render image with alt", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toBeTruthy();
    });
    test("should render image with width", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toHaveAttribute("width", defaultProps.width.toString());
    });
    test("should render image with height", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toHaveAttribute("height", defaultProps.height.toString());
    });
    test("should render image with default format", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toHaveClass("rounded-lg");
    });
    test("should render image with default size", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toHaveClass("w-48 h-48");
    });
    test("should render image with default filter", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} filter="invert" />);
        expect(getByAltText(defaultProps.alt)).toHaveClass("filter invert");
    });
    test("should render image with default fit", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toHaveClass("object-cover");
    });
    test("should render image with custom format", () => {
        const { getByAltText } = render(<ImageComponent {...defaultProps} format="flat" />);
        expect(getByAltText(defaultProps.alt)).toHaveClass("rounded-none");
    });
});