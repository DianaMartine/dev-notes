import { forwardRef, useState } from "react";
import { InputProps } from "../types";
import { Input } from "@/components/ui/input";
import { IonDialog } from "../ion-dialog/ion-dialog";

export const IonInput = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type, value, ...props }, ref) => {

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        }

        return (
            <>
            {type === "submit" ? (
                <IonDialog
                    triggerLabel={label}
                    title={label}
                    description={value ?? ""}
                />
            ) : (
                <Input
                    type={type}
                    placeholder={label}
                    ref={ref}
                    onClick={handleSubmit as any}
                    {...props}
                />
            )}
            </>
        );
    },
);

IonInput.displayName = "IonInput";