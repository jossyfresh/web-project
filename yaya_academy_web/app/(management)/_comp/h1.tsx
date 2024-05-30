import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function H1({ children, className }: Props) {
  return (
    <h1 className={cn("font-bold text-2xl md:text-4xl", className)}>
      {children}
    </h1>
  );
}

export default H1;
