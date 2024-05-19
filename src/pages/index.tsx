import React, {useState} from 'react'
import { type NextPage } from "next"
import Head from "next/head"
import Landing from "@/components/landing"


const index : NextPage= () => {

  const [message, setMessage] = useState("loading...")


  return (
        <>
      <Head>
        <title>Pharmacist Chatbot</title>
        <meta name="description" content="Pharmacist Chatbot"/>
        <link rel="icon" href="#" />
      </Head>
     <Landing/>
      
    </>
  )
}

export default index








