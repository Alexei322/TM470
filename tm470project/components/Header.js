import React from 'react';

export default function Header() {
    return (
        <header className="md:flex md:justify-between md:p-8 md:items-center">
            <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200"></div>
                <div className="mx-auto md:mx-0 md:flex-grow justify-end">
                    <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md" />
                </div>
            </div>

        </header>
    );
}