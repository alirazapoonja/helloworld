import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
           <div className="bg-rose-600 h-12">
            <div className="text-yellow-400 flex justify-between items-center">
                <h1 className="text-x1 m-2 cursor-pointer">Navbar</h1>
                <ul className="flex gap-3 mr-4 cursor-pointer">
                    <link className="hover:text-blue-700" href="/home">Home</link>
                    <link className="hover:text-orange-700" href="/about">About</link>
                    <link className="hover:text-pink-800" href="/skills">Skills</link>
                    <link className="hover:text-amber-700" href="/contact">Contact</link>
                </ul>
            </div>
           </div>
    )
}
export default Navbar