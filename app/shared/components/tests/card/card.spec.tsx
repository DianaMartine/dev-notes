import React from "react";
import { render } from "@testing-library/react";
import { Card } from "../../card/card";
import type { CardProps } from "../../types";

const defaultProps: CardProps = {
    title: "some title",
    subtitle: "some subtitle",
    format: "flat",
};

describe("CardComponent", () => {
    test("should create", () => {
        const { container } = render(<Card {...defaultProps} />);
        expect(container).toBeTruthy();
    });
    test("should render title", () => {
        const { getByText } = render(<Card {...defaultProps} />);
        expect(getByText("some title")).toBeTruthy();
    });
    test("should render subtitle", () => {
        const { getByText } = render(<Card {...defaultProps} />);
        expect(getByText("some subtitle")).toBeTruthy();
    });
    test("should render with globals props", () => {
        const { container } = render(<Card {...defaultProps} bgColor="red" textColor="blue" />);
        expect(container.firstChild).toHaveStyle("background-color: red");
        expect(container.firstChild).toHaveStyle("color: blue");
    });
    test("should render with avatar", () => {
        const { container } = render(<Card {...defaultProps} avatar="https://img.shields.io/badge/React-blue" />);
        expect(container.querySelector("img")).toBeTruthy();
    });
    test("should render with avatarOptions", () => {
        const { container } = render(<Card {...defaultProps} avatar="https://img.shields.io/badge/React-blue" avatarOptions={{ alt: "react", size: "small", format: "circle" }} />);
        expect(container.querySelector("img")).toBeTruthy();
    });
    test("should render with format rounded", () => {
        const { container } = render(<Card {...defaultProps} format="rounded" />);
        expect(container.firstChild).toHaveClass("rounded-lg");
    });
    test("should render with format flat", () => {
        const { container } = render(<Card {...defaultProps} format="flat" />);
        expect(container.firstChild).toHaveClass("rounded-none");
    });
    test("should render with size small", () => {
        const { container } = render(<Card {...defaultProps} size="small" />);
        expect(container.firstChild).toHaveClass("w-32 h-32");
    });
    test("should render with size medium", () => {
        const { container } = render(<Card {...defaultProps} size="medium" />);
        expect(container.firstChild).toHaveClass("w-48 h-48");
    });
    test("should render with size large", () => {
        const { container } = render(<Card {...defaultProps} size="large" />);
        expect(container.firstChild).toHaveClass("w-64 h-64");
    });
});