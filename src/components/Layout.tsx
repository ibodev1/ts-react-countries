import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="w-full h-full min-h-screen py-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
