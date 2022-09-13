import React from "react";
import NavElem from "../NavElem/NavElem";

const navigation = [
  { href: "/home", label: "home", img: "Home.svg", className: "navElem" },
  { href: "/chats", label: "chats", img: "Chat.svg", className: "navElem" },
  { href: "/contacts", label: "home", img: "person.svg", className: "navElem" },
  {
    href: "/notifications",
    label: "notifications",
    img: "bell.svg",
    className: "navElem",
  },
  {
    href: "/calendar",
    label: "calendar",
    img: "calendar.svg",
    className: "navElem",
  },
  {
    href: "/settings",
    label: "settings",
    img: "setting.svg",
    className: "navElem",
  },
  {
    href: "/logout",
    label: "logout",
    img: "power.svg",
    className: "navElem log-out",
  },
];

function Nav() {
  return (
    <nav>
      <ul>
        {navigation.map(({ href, label, img, className }) => (
          <li key={href}>
            <NavElem
              href={href}
              label={label}
              img={img}
              className={className}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
