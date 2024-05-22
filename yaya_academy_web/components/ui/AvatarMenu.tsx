import { Menu, Button, rem } from "@mantine/core";
import { Link, User, User2, UserCircle, UserCircle2 } from "lucide-react";
import Image from "next/image";

export default function AvatarMenu() {
  return (
    <Menu width={170} shadow="md">
      <Menu.Target>
        <button className="bg-gray-100 rounded-full">
          <UserCircle2 className="w-8 h-8" strokeWidth={1} color="gray" />
        </button>
      </Menu.Target>

      <Menu.Dropdown className="w-[20px]">
        <Menu.Item component="a" href="/home" className="text-sm">
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
        <Menu.Item component="a" href="/profile" className="text-sm">
          <div className="flex gap-2 items-center">
            <svg
              className="w-4 h-4"
              viewBox="0 0 32 32"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <title />
              <path d="M22.82,20.55l-.63-.18c-1.06-.29-1.79-.51-1.91-1.75,2.83-3,2.79-5.67,2.73-8.47,0-.38,0-.76,0-1.15a7.1,7.1,0,0,0-7-7A7.1,7.1,0,0,0,9,9c0,.39,0,.77,0,1.15-.06,2.8-.1,5.45,2.73,8.47-.12,1.24-.85,1.46-1.91,1.75l-.63.18C5.61,21.74,2,25,2,29a1,1,0,0,0,2,0c0-3,3-5.61,5.82-6.55.16-.06.34-.1.52-.15A4.11,4.11,0,0,0,13.45,20a5.4,5.4,0,0,0,5.1,0,4.11,4.11,0,0,0,3.11,2.35c.18.05.36.09.52.15C25,23.39,28,26,28,29a1,1,0,0,0,2,0C30,25,26.39,21.74,22.82,20.55Zm-9.36-3C10.9,15,10.94,12.86,11,10.18,11,9.8,11,9.4,11,9A5,5,0,0,1,21,9c0,.4,0,.8,0,1.18,0,2.68.09,4.8-2.47,7.36A3.58,3.58,0,0,1,13.46,17.54Z" />
            </svg>
            Profile
          </div>
        </Menu.Item>
        <Menu.Item className="flex ">
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
