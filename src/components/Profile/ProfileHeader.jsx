import { introLines } from "../../data/profile";
function ProfileHeader() {
  return (
    <div className="mb-6">
      <div className="space-y-1 mx-2">
        {introLines.map((line, index) => (
          <p key={index} className="font-medium">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeader;
