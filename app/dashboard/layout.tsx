import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="relative h-screen max-h-screen">
    <div className="absolute inset-2 p-4 border overflow-y-auto rounded-lg">{children}</div>
  </div>;
}
