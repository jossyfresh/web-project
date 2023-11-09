'use client'
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "./Redux/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const login_status = useAppSelector((state) => state.logged_in?.logged_in)
  return (
    <div>
      {login_status && <p>the user is loggen in...</p>}
    </div>
		);
}
