import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import { saveSelectedUser } from "../../utils/storage";

const BASE = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images/icons";

interface Props {
  userId: string;
  user: User;
  onClose: () => void;
}

const MoreDropDown: FC<Props> = ({ user, onClose }) => {
  const navigate = useNavigate();

  const handleView = () => {
    saveSelectedUser(user);
    navigate(`/dashboard/users/${user.id}`);
    onClose();
  };

  return (
    <div className="options-dropdown">
      <ul>
        <li onClick={handleView}>
          <img src={`${BASE}/eye-icon.svg`} alt="view" />
          <span>View Details</span>
        </li>
        <li onClick={onClose}>
          <img src={`${BASE}/user-x-icon.svg`} alt="blacklist" />
          <span>Blacklist User</span>
        </li>
        <li onClick={onClose}>
          <img src={`${BASE}/user-check-icon.svg`} alt="activate" />
          <span>Activate User</span>
        </li>
      </ul>
    </div>
  );
};

export default MoreDropDown;