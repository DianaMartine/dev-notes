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
                <DialogTrigger asChild>
                    <Button variant="outline">
                        {triggerLabel}
                    </Button>
                </DialogTrigger>
                <DialogContent className="
                sm:max-w-[425px]
                "
                >
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription>
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
) as React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;

IonDialog.displayName = "IonDialog"