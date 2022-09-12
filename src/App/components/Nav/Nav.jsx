import React from "react";
import NavElem from "../NavElem/NavElem";

const navigation = [
  { href: "/home", label: "home" },
  { href: "/chats", label: "chats" },
  { href: "/contacts", label: "home" },
  { href: "/notifications", label: "notifications" },
  { href: "/calendar", label: "calendar" },
  { href: "/settings", label: "settings" },
];

function Nav() {
  return (
    <nav>
      <ul>
        {navigation.map(({ href, label }) => (
          <li>
            <NavElem href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
