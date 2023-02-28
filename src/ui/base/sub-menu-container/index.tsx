'use client';
import React from "react";
import Link from 'next/link';
import { ChevronRightRounded } from "@mui/icons-material";

type SubMenuContainerProps = {
  title: String,
  subtitle: String,
  linkHref: Object,
}

const SubMenuContainer = ({title, subtitle, linkHref}: SubMenuContainerProps)  => {
  return (
    <div className="subMenuContianer">
      <h3>{title}</h3>
      <div className="viewAll">
        <p>{subtitle}</p>
        <Link href={linkHref}>
        <i>
          <ChevronRightRounded />
        </i>
        </Link>
        
      </div>
    </div>
  );
}
export default SubMenuContainer;