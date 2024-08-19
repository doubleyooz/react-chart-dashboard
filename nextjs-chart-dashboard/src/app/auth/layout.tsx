import React from 'react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="hidden md:flex h-full w-full bg-green-400" />
            {children}
        </div>
    );
}
