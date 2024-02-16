"use client";
import Home from "@/components/Home";
import Inprogress from "@/components/Inprogress";
import { Tabs } from "@mantine/core";

export default function page() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List className="px-10">
        <Tabs.Tab
          style={{
            fontSize: 19,
          }}
          className="text-2xl"
          value="first"
          color="purple"
        >
          Home
        </Tabs.Tab>
        <Tabs.Tab
          style={{
            fontSize: 19,
          }}
          className="text-2xl"
          value="second"
          color="purple"
        >
          InProgress
        </Tabs.Tab>
        <Tabs.Tab
          style={{
            fontSize: 19,
          }}
          className="text-2xl"
          value="third"
          color="purple"
        >
          Completed
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        <Home />
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        <Inprogress />
      </Tabs.Panel>

      <Tabs.Panel value="third" pt="xs">
        <div className="h-screen"></div>
      </Tabs.Panel>
    </Tabs>
  );
}
