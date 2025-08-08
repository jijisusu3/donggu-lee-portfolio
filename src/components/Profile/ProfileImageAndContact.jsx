import { contacts } from "../../data/profile";
function ProfileImageAndContact() {
  return (
    <div className="w-full flex flex-col items-center px-4 pb-6 space-y-8">
      <img
        src="/profile_image.jpg"
        alt="Donggu Lee"
        className="rounded-full w-80 md:w-60 object-cover shadow-md"
      />

      <div className="w-full max-w-md space-y-4">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#121212] border border-gray-700 rounded-2xl px-5 py-3 hover:bg-gray-600 transition"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
              <img src={contact.img} alt={contact.label} className="w-6 h-6" />
            </div>

            <div className="flex flex-col">
              <div className="text-sm text-gray-400">{contact.label}</div>
              <div className="text-white font-semibold text-base break-all">
                {contact.value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProfileImageAndContact;
