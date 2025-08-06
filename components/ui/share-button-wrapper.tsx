"use client";

import { ShareButton } from "./share-button";
import { useEffect, useState } from "react";

interface ShareButtonWrapperProps {
  title: string;
  className?: string;
}

export function ShareButtonWrapper({
  title,
  className,
}: ShareButtonWrapperProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return <ShareButton title={title} url={url} className={className} />;
}
