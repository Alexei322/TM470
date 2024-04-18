import React from 'react';

export default function TillHeader() {
    return (
        <header className="flex justify-between p-8 items-center">
            <div className="flex items-center">
                <img src="https://placehold.co/75x75?text=Logo"></img>
                <div className="mx-auto md:mx-0 md:flex-grow justify-end">
                    <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md" />
                </div>
            </div>

        </header>
    );
}