import { forwardRef } from "react";
import { InputProps } from "../types";
import { Input } from "@/components/ui/input";

export const IonInput = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type, ...props }, ref) => {
        return (
            <Input
                type={type}
                placeholder={label}
                ref={ref}
                {...props}
            />
        );
    },
);

IonInput.displayName = "IonInput";