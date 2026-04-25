import React from "react";
import Input from "@/components/input";

export default function TextField({name, label, className = '', ...props}) {
    return (
        <>
            <label htmlFor="name">{label}</label>
            <Input name={name}/>
        </>
    );
}
