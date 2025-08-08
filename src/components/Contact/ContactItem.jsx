function ContactItem({ icon, label, value, link }) {
  return (
    <div className="flex items-center gap-10 w-full bg-white text-black rounded-xl px-4 py-3 hover:bg-gray-100">
      <div className="flex items-center justify-center w-10 h-10 bg-white  rounded">
        <img
          src={icon}
          alt={`${label} icon`}
          className="w-5 h-5 object-contain"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-500">{label}</span>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            {value}
          </a>
        ) : (
          <span className="font-medium">{value}</span>
        )}
      </div>
    </div>
  );
}
export default ContactItem;
