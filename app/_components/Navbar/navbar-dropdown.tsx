"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import NavbarItem from "./navbar-item"
import { ModeToggle } from "@/components/theme-toggle"


export const NavbarDropdown = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"><MenuIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem>
                    <NavbarItem href='#home' text='Home' />
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    <NavbarItem href='#about' text='About' />
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    <NavbarItem href='#projects' text='Projects' />
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    <NavbarItem href='#contact' text='Projects' />
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
