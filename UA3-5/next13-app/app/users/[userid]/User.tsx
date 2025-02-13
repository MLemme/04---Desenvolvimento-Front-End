import React from "react";
import { notFound } from "next/navigation";

async function getUser(userId : string) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
    const users = await response.json();
    if (response.status == 404) 
        return null
    return users;
}

export default async function User({userId} : any) {
    const user = await getUser(userId);
    //console.log(userId);
    if (!user) {
        notFound();
    }
    return (
        <div>
            <p>Nome: {user && user.name} </p>
            <p>Email: {user && user.email} </p>
        </div>
    )
}