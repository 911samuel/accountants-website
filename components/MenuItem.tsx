"use client";
import { MenuItemProps } from "@/interface";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function MenuItemComponent({
  item,
  sidebarOpen,
  openSubMenu,
  toggleSubMenu,
  pathname,
}: MenuItemProps) {
  return (
    <li>
      {item.subItems && item.subItems.length > 0 ? (
        <div>
          <button
            onClick={() => toggleSubMenu(item.name)}
            className={`w-full flex items-center p-3 rounded-lg text-white bg-transparent ${
              sidebarOpen ? "justify-between" : "justify-center"
            } ${
              pathname.includes(item.path)
                ? "bg-transparent"
                : "hover:bg-primary"
            } transition-colors`}
          >
            <div className="flex items-center">
              <span className="mr-3">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </div>
            {sidebarOpen && (
              <FiChevronDown
                className={`transition-transform ${
                  openSubMenu === item.name ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {sidebarOpen && openSubMenu === item.name && (
            <ul className="ml-8 mt-2 space-y-1">
              {item.subItems.map((subItem) => (
                <li key={subItem.name}>
                  <Link
                    href={subItem.path}
                    className={`flex items-center p-2 rounded-lg transition-colors text-white ${
                      pathname === subItem.path
                        ? "bg-primary"
                        : "hover:bg-primary hover:text-white"
                    }`}
                  >
                    <span className="mr-2">{subItem.icon}</span>
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`flex items-center p-3 rounded-lg transition-colors text-white ${
            sidebarOpen ? "px-4" : "justify-center"
          } ${
            pathname === item.path
              ? "bg-primary hover:text-white"
              : "hover:bg-primary hover:text-white"
          }`}
        >
          <span>{item.icon}</span>
          {sidebarOpen && <span className="ml-3">{item.name}</span>}
        </Link>
      )}
    </li>
  );
}