import { useEffect, useState } from "react";

const EmailDetails = ({ selectedEmail }) => {
  const [selectedEmailDetails, setselectedEmailDetails] = useState(null);

  const fetchEmailDetails = async () => {
    if (selectedEmail?.id) {
      try {
        const res = await fetch(
          `https://flipkart-email-mock.now.sh/?id=${selectedEmail.id}`
        );
        const emailDetails = await res.json();
        setselectedEmailDetails(emailDetails);
        console.log("emailDetails", emailDetails);
      } catch (error) {
        console.error(error?.message || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    fetchEmailDetails();
  }, [selectedEmail]);

  return (
    <>
    {selectedEmailDetails && (
        <div className="flex w-3/5 rounded-md bg-white border border-borderColor p-6 self-start">
        <span className="bg-accent h-10 w-10 shrink-0 rounded-full text-center text-white leading-10 text-xl font-semibold">
            {selectedEmail?.from?.name[0].toUpperCase() || ""}
        </span>

        <div className="w-full mx-8 space-y-4">
            <div className="flex flex-col gap-3 text-textColor">
            <div className="flex justify-between">
                <span className="text-3xl font-semibold">
                {selectedEmail?.subject}
                </span>
                <button className="py-1 px-4 text-xs text-center text-white bg-accent rounded-full">
                Mark as favorite
                </button>
            </div>

            <p>26/02/2020</p>
            </div>

            <EmailBody body={selectedEmailDetails.body} />
        </div>
        </div>
    )}
    </>
  );
};

export const EmailBody = ({ body }) => {
  return (
    <div
      className="text-textColor"
      dangerouslySetInnerHTML={{ __html: body }}
    ></div>
  );
};

export default EmailDetails;
