import { Menu, Button, rem } from "@mantine/core";

export default function AvatarMenu() {
  return (
    <Menu width={170} shadow="md">
      <Menu.Target>
        <button className="w-8 h-8 rounded-full border border-black">YS</button>
      </Menu.Target>

      <Menu.Dropdown className="w-[20px]">
        <Menu.Item component="a" href="https://mantine.dev" className="text-sm">
          <div className="flex gap-2 items-center">
            <svg
              className="w-4 h-4"
              fill="#000000"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z"
                fill-rule="evenodd"
              />
            </svg>
            My Courses
          </div>
        </Menu.Item>
        <Menu.Item component="a" href="https://mantine.dev" className="flex ">
          <div className="flex gap-1 items-center">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Logout
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
