import React from "react";
type MessageProps = {
  variant?: string;
  children: any;
}

export default function Message ({variant="", children}: MessageProps) { //variante alert-info
  return <div className={`alert ${variant}`}>{children}</div>;
};
