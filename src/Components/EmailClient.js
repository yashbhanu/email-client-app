import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard";
import Pagination from "./Pagination";
import EmailListLoader from "./Loaders/EmailListLoader";

const EmailClient = () => {
  const [emails, setEmails] = useState([]);
  const [page, setpage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setloading] = useState(false);
  const fetchEmail = async () => {
    try {
      setloading(true)
      const res = await fetch(
        `https://flipkart-email-mock.now.sh?page=${page}`
      );
      const emails = await res.json();
      setEmails(emails?.["list"] || []);
      setTotalCount(emails?.["total"] || 0);
    } catch (error) {
      console.error(error?.message || "Something went wrong");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchEmail();
  }, [page]);

  useEffect(() => {
    console.log({ emails });
  }, [emails]);

  return (
    <section className="min-w-xl mx-auto px-24 py-8 bg-background">
      <div className="flex gap-8 text-black text-lg">
        <p>Filter By:</p>
        <div className="flex gap-12">
          <button>Unread</button>
          <button>Read</button>
          <button>Favorites</button>
        </div>
      </div>

      {emails.length > 0 && !loading ? (
        <>
          <div className="my-12 space-y-4">
            {emails.length > 0 &&
              emails.map((email) => <EmailCard email={email} />)}
          </div>
          <Pagination
            totalCount={totalCount}
            currentPage={page}
            limit={10}
            onPageChange={(val) => setpage(val)}
          />
        </>
      ) : (
        <EmailListLoader />
      )}
    </section>
  );
};

export default EmailClient;
