import React, { useRef } from "react";
import { ContextMenu } from "primereact/contextmenu";

export default function ContextMenuComponent() {
  const cm = useRef(null);
  const items = [
    { label: "View", icon: "pi pi-fw pi-search" },
    { label: "Delete", icon: "pi pi-fw pi-trash" },
  ];

  return (
    <div className="card flex md:justify-content-center">
      <ContextMenu model={items} ref={cm} breakpoint="767px" />
      <img
        src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg"
        alt="Logo"
        className="max-w-full"
        onContextMenu={(e) => cm.current.show(e)}
      />
    </div>
  );
}
