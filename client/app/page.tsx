'use client'

import axios from 'axios'
// import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import heroimage from './assets/heroimage.jpeg'
import HeroBackground from './assets/icons/Hero_background'

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

interface Report {
  id: number;
  user_id: number;
  title: string;
  body: string;
  date: string;
  location: string;
  image: string;
  created_at: string;
  updated_at: string;
  user: User;
}

interface Data {
  reports: Report[];
}

const Home = () => {
  const [data, setData] = useState<Data>({ reports: [] })

    useEffect(() => {
    async function fetchReports() {
      const response = await axios.get<Data>('http://127.0.0.1:3005/api/reports')
      setData(response.data)
    }

    fetchReports()
  }, [])
  console.log(data)
  return (
    <section className="flex h-full w-full flex-col justify-between bg-primary text-homeText">
      {Array.isArray(data.reports) && data.reports.map((report) => (
        <div key={report.id}>
          <h2>{report.title}</h2>
          <p>{report.body}</p>
          <small>{report.location}</small>
          <div>
            <strong>User: {report.user.name}</strong>
            <span>Email: {report.user.email}</span>
          </div>
        </div>
      ))}
      <h1
        className="container mx-auto flex h-full flex-col justify-center pl-12 pt-6
          text-3xl font-medium sm:pl-8 md:max-w-3xl md:max-3xl:pl-12 md:max-3xl:pt-16"
      >
        <div>
          H!&nbsp;<span className="hidden sm:max-3xl:inline">Welcome to my website.</span>
        </div>
      </h1>
      <span
        className="container mx-auto flex h-full flex-col justify-center pl-12 pr-6 pt-2
          sm:pl-8 sm:pt-2 md:max-w-3xl md:max-3xl:pl-12 md:max-3xl:pt-2"
      >
        If you poke around you&apos;ll find some things that make me happy, some things that I&apos;ve done and some
        things that pay my bills (usually those are all the same).
      </span>
      {/* <span
        className="container mx-auto flex h-full flex-col justify-center pl-12
          sm:pl-8 md:max-w-3xl md:max-3xl:pl-0 md:max-3xl:pt-1"
      >
        some things that I&apos;ve done and some things that pay my
      </span>
      <span
        className="container mx-auto flex h-full flex-col justify-center pl-12
          sm:pl-8 md:max-w-3xl md:max-3xl:pl-0 md:max-3xl:pt-1"
      >
        bills (usually those are all the same).
      </span> */}
      {/* <br /> */}
      <span
        className="container mx-auto flex h-full flex-col justify-center pl-12 pr-6
          sm:pl-8 md:max-w-3xl md:max-3xl:pl-12 md:max-3xl:pt-3"
      >
        Please reach out below if you want to talk about anything, ask me a question, or hang out (you you airfare).
      </span>
      {/* <span
        className="container mx-auto flex h-full flex-col justify-center pl-12
          sm:pl-8 md:max-w-3xl md:max-3xl:pl-0 md:max-3xl:pt-1"
      >
        about anything, ask me a question, or
      </span>
      <span
        className="container mx-auto flex h-full flex-col justify-center pl-12
          sm:pl-8 md:max-w-3xl md:max-3xl:pl-0 md:max-3xl:pt-1"
      >
        hang out (you you airfare).
      </span> */}
      <h1
        className="container mx-auto hidden
          h-full flex-col justify-center pl-12 pt-1 text-3xl
          font-medium sm:pl-8 sm:max-3xl:flex sm:max-3xl:pt-1 md:max-w-3xl md:max-3xl:pl-12"
      >
        -Joey
      </h1>
      <div className="mt-8 hidden sm:mt-6 sm:max-3xl:flex sm:max-3xl:justify-end">
        <HeroBackground scale={0.75} />
      </div>
      <div className="flex justify-center">
        {/* <Image src={heroimage} alt="Hero Image" className="mt-12 w-3/5 rounded-xl sm:max-3xl:hidden" /> */}
      </div>
    </section>
  )
}

export default Home
