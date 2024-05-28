import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
const H2 = ({ children, className }: Props) => {
  return (
    <h2 className={cn("font-bold text-2xl  md:text-4xl ", className)}>
      {children}
    </h2>
  );
};

export default H2;
