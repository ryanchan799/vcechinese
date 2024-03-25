"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left text-xs font-light"
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <p className="pr-20">On this page</p>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem text="记叙文的写法" />
            <MenuItem text="说明文的写法" />
            <MenuItem text="说服文的写法" />
            <MenuItem text="想象文的写法" />
            <MenuItem text="评估文的写法" />
            <MenuItem text="语言该如何进步" />
            <MenuItem text="作文在考试中的重要性" />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MenuItem(props: { text: string }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-1.5"
          )}
        >
          {props.text}
        </a>
      )}
    </Menu.Item>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
