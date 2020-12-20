import React, {useState, useEffect} from 'react';
import Layout from "./layouts/Layout";
import api from "../apis/api";


export default function Contact({author, phone}) {
    // const [author, setAuthor]= useState("")
    // const [phone, setPhone]= useState("")
    // useEffect(() => {
    //     api.getPageInfo().then(data=> () => {
    //         console.log("data", data)
    //         setAuthor(data.author)
    //         setPhone(data.phone)
    //     })
    // }, []);

    return (
        <Layout>
            <h3>Contact</h3>
            <p>Author: {author}</p>
            <p>Phone: {phone}</p>
        </Layout>
    );
}

export async function getServerSideProps() {
    const data = await api.getPageInfo()
    return {
        props: {
            author: data.author,
            phone: data.phone,
        }
    }
}

