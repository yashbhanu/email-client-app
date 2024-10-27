import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard";
import Pagination from "./Pagination";
import EmailListLoader from "./Loaders/EmailListLoader";
import EmailDetails from "./EmailDetails";

const EmailClient = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setselectedEmail] = useState(null);
  const [page, setpage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setloading] = useState(false);
  const fetchEmail = async () => {
    try {
      setloading(true);
      const res = await fetch(
        `https://flipkart-email-mock.now.sh?page=${page}`
      );
      const emails = await res.json();
      setEmails(emails?.["list"] || []);
      setTotalCount(emails?.["total"] || 0);
    } catch (error) {
      setloading(false);
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
          <div className="my-12 flex gap-8">
            <div className={`space-y-4 ${selectedEmail ? "w-2/5" : "w-full"}`}>
              {emails.length > 0 &&
                emails.map((email) => (
                  <EmailCard
                    email={email}
                    setSelectedEmail={setselectedEmail}
                    selectedEmail={selectedEmail}
                  />
                ))}
            </div>

            {selectedEmail && (
                <EmailDetails selectedEmail={selectedEmail} />
            )}
          </div>

          <Pagination
            totalCount={totalCount}
            currentPage={page}
            limit={10}
            onPageChange={(val) => setpage(val)}
          />
        </>
      ) : !emails.length && !loading ? (
        <div className="absolute top-1/2 left-1/2">
          <span className="text-2xl font-semibold">No Data Found !!</span>
        </div>
      ) : (
        <EmailListLoader />
      )}
    </section>
  );
};

export default EmailClient;
