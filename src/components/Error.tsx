'use client';
import React from "react";

export default function Message (variant:any, children:any) { //variante alert-info
  return <div className={`alert ${variant}`}>{children}</div>;
};
