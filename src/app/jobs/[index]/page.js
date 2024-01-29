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
    return <div> Loading... </div>
  } else {
    return (
      <div>
        <Link href="/">Home</Link>
        <p>This job page details my experience in {jobs[params.index].title}. Key highlights include: {jobs[params.index].desc}</p>
      </div>
    );
  }
}
