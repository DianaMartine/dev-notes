import common from "@/app/shared/data/common.json";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { PopoverContent } from "@radix-ui/react-popover";
import React, { forwardRef, useState } from "react";
import { ComboboxProps } from "../types";

export const IonCombobox = forwardRef<HTMLDivElement, ComboboxProps>(
    ({ options, label, onChange }, ref) => {
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState("");

        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="
                        w-[200px]
                        justify-between
                        bg-transparent
                        "
                    >
                        {
                            value
                                ? options.find((option) => option.value === value)?.label
                                : label
                        }
                        <CaretSortIcon className="
                            ml-2
                            h-4
                            w-4
                            shrink-0
                            opacity-50
                            "
                        />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="
                w-[200px]
                p-0
                "
                >
                    <Command>
                        <CommandInput
                            placeholder={label}
                            className="
                            h-9
                            "
                        />
                        <CommandList>
                            <CommandEmpty>
                                {common.noResults}
                            </CommandEmpty>
                            <CommandGroup>
                                {
                                    options.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue);
                                                setOpen(false);
                                            }}
                                        >
                                            {option.label}
                                            <CheckIcon className={cn(
                                                "ml-auto h-4 w-4",
                                                value === option.value && "text-[#FF66C4]",
                                            )} />
                                        </CommandItem>
                                    ))
                                }
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    },
);

IonCombobox.displayName = "IonCombobox";