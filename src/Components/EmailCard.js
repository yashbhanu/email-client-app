const EmailCard = ({ email }) => {

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  function convertEpochToDateTime(val) {
    const date = new Date(val);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const format = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}${format}`;
  }

  return (
    <div className="flex border gap-6 bg-white border-borderColor px-6 py-2 w-full rounded-md">
      <span className="bg-accent h-10 w-10 rounded-full text-center text-white">
        <p className="text-xl font-semibold leading-10">
          {email?.from?.name[0].toUpperCase() || ""}
        </p>
      </span>

      <div className="flex flex-col justify-between gap-3 text-textColor">
        <div className="flex flex-col gap-1">
          <p>
            From:{" "}
            <strong>{`${capitalizeFirstLetter(email?.from?.name)} <${
              email?.from?.email
            }>`}</strong>
          </p>
          <p>
            Subject: <strong>{email?.subject}</strong>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p>{email?.short_description}</p>
          <p>{convertEpochToDateTime(email?.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
