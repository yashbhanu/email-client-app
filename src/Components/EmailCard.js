import { useSelector } from "react-redux";

const EmailCard = ({ email, setSelectedEmail, selectedEmail }) => {
  const { favorites } = useSelector((state) => state.filters);

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const handleCardClick = () => {
    if(selectedEmail?.id && selectedEmail?.id === email.id) {
      setSelectedEmail(null)
    } else {
      setSelectedEmail(email)
    }
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
    <article
      key={email.id}
      onClick={handleCardClick}
      className={`flex border gap-6 bg-white cursor-pointer ${
        selectedEmail?.id !== email.id ? "border-borderColor" : "border-accent"
      } px-6 py-2 w-full rounded-md`}
    >
      <span className="bg-accent h-10 w-10 shrink-0 rounded-full text-center text-white leading-10 text-xl font-semibold">
        {email?.from?.name[0].toUpperCase() || ""}
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
          <p>
            {selectedEmail?.id
              ? `${email?.short_description.slice(0, 50)}...`
              : email?.short_description}
          </p>
          <div className="flex gap-12">
            <p>{convertEpochToDateTime(email?.date)}</p>
            {favorites.includes(email.id) && (
              <span className="text-accent text-sm font-medium">Favorite</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default EmailCard;
