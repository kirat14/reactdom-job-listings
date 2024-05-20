import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const overrideSpinner = {
    display: "block",
    margin: "100px auto",
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3001/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Failed to fetch data: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>

        {loading ? (
          <ClipLoader
            color="#4338ca"
            loading={loading}
            cssOverride={overrideSpinner}
            size={150}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
