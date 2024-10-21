import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React, { forwardRef } from "react";
import { DialogProps } from "../types";

export const IonDialog = forwardRef<HTMLDivElement, DialogProps>(
    (
        {
            triggerLabel,
            title,
            description,
            confirmLabel,
            cancelLabel,
            onConfirm,
            onCancel,
        },
        ref,
    ) => {
        return (
            <Dialog>
                <DialogTrigger asChild className="
                bg-transparent
                ">
                    <Button variant="outline">
                        {triggerLabel}
                    </Button>
                </DialogTrigger>
                <DialogContent className="
                sm:max-w-[425px]
                bg-[#1D0259]
                text-white
                "
                >
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription className="
                        text-[#D3D3D3]
                        ">
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    {
                        (confirmLabel ||
                            cancelLabel ||
                            onConfirm ||
                            onCancel) && (
                            <DialogFooter>
                                <Button
                                    onClick={onConfirm}
                                >
                                    {confirmLabel}
                                </Button>
                                <Button
                                    onClick={onCancel}
                                >
                                    {cancelLabel}
                                </Button>
                            </DialogFooter>
                        )
                    }
                </DialogContent>
            </Dialog>
        )
    },
);

IonDialog.displayName = "IonDialog"