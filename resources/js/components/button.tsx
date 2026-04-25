import React from "react";

export default function Button({className = '', children, loading = false, ...props}) {
    return (
        <>
            <button {...props}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition hover:bg-blue-600 active:scale-95 ${className}`}>
                {loading ? '...' : children}
            </button>
        </>
    );
}
