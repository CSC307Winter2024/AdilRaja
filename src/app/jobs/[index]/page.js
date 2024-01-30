'use client';

import Link from "next/link";
import { useState, useEffect } from "react"

export default function Job({ params }) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handler = async function() {
    const response = await fetch('/api/jobs');
    const projects = await response.json();
    setJobs(projects);
    setLoading(false);
  };

  useEffect(() => {
    handler();
  }, []);

  if (loading) {
    return <div> Loading </div>
  } else {
    return (
      <div>
        <Link href="/">Home</Link>
        <p>This is my job page that has an ID of: {params.index} - The company I worked at was {jobs[params.index].title}. </p>
      </div>
    );
  }
}