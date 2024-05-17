"use client";
import Home from "@/components/Home";
import Inprogress from "@/components/Inprogress";
import { Tabs } from "@mantine/core";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

export default function page() {
  return (
    <Tabs mt={25} color="teal" defaultValue="first">
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
        <div className="flex justify-center mx-auto mt-20 border border-gray-300 w-[60%] h-96 rounded-md">
          <Result
            className="w-full items-center mt-10"
            icon={<SmileOutlined />}
            title="Sorry, Looks Like There are no courses Here!"
          />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="third" pt="xs">
        <div className="flex justify-center mx-auto mt-20 border border-gray-300 w-[60%] h-96 rounded-md">
          <Result
            className="w-full items-center mt-10"
            icon={<SmileOutlined />}
            title="Sorry, Looks Like There are no completed courses"
          />
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}
