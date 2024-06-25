"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components";
import Link from "next/link";

const Cookie = () => {
  const [showCookie, setShowCookie] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (!consent) {
      setShowCookie(true);
    }
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setShowCookie(false);
  };

  const rejectCookie = () => {
    setConsent(false);
    setShowCookie(false);
  };

  if (!showCookie) return `&#x1F36A`;

  return (
    <>
      {showCookie && (
        <div className="fixed bottom-4 left-0 mx-4 flex max-w-sm flex-col items-start justify-start gap-4 bg-[#744442] p-2 text-[#f3eee8]">
          <div>
            <p className="text-sm">
              We use some essential cookies to ensure you get the best
              experience on our website.{" "}
              <span className="underline">
                <Link href="/">Learn more</Link>
              </span>
            </p>
          </div>
          <div className="items-between flex w-full flex-col gap-4">
            <div className="centered border border-[#f3eee8]">
              <Button label="accept all" onClick={acceptCookie} />
            </div>
            <div className="centered border border-[#f3eee8]">
              <Button label="reject all" onClick={rejectCookie} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookie;
