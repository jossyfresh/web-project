import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 ", className)}>{children}</div>
  );
};

export default Container;
