import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "PAYDAY2 Community",
    description: "The biggest PAYDAY2 community resource!",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}
