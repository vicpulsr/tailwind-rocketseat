"use client";

import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Search,
  Menu,
  Cog,
  Moon,
  Sun,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Switch from "@radix-ui/react-switch";
import { Button } from "../Button";
import { useState } from "react";
import { useDarkMNode } from "@/stores/use-dark-mode";

export const Sidebar = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMNode();

  return (
    <Collapsible.Root
      className={twMerge(
        "fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-r border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen",
        "lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen",
        "dark:border-zinc-800 dark:bg-zinc-900",
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Switch.Root
          checked={isDarkMode}
          onCheckedChange={setIsDarkMode}
          className="h-[25px] w-[42px] rounded-full border border-violet-300 bg-white/50 shadow-sm data-[state=checked]:bg-violet-300"
          id="dark-mode"
        >
          <Switch.Thumb className="transform-x-[2px] flex size-[21px] items-center justify-center rounded-full bg-violet-300 transition-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:bg-white dark:data-[state=checked]:bg-zinc-700">
            {isDarkMode ? (
              <Moon className="size-4 text-violet-300" />
            ) : (
              <Sun className="size-4 text-white" />
            )}
          </Switch.Thumb>
        </Switch.Root>

        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem icon={Home} title="Home" />
          <NavItem icon={BarChart} title="Dashboard" />
          <NavItem icon={SquareStack} title="Projects" />
          <NavItem icon={CheckSquare} title="Tasks" href="/tasks" />
          <NavItem icon={Flag} title="Reporting" />
          <NavItem icon={Users} title="Users" />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem icon={LifeBuoy} title="Suport" />
            <NavItem icon={Cog} title="Settings" />
          </nav>
        </div>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
