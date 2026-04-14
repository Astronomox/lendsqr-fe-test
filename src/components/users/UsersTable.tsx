import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import FilterForm from "./FilterForm";
import MoreDropDown from "./MoreDropDown";
import { saveSelectedUser } from "../../utils/storage";

const BASE = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images/icons";

interface Props {
  users: User[];
  loading: boolean;
}

const UsersTable: FC<Props> = ({ users }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleViewUser = (user: User) => {
    saveSelectedUser(user);
    navigate(`/dashboard/users/${user.id}`);
  };

  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            {["Organization", "Username", "Email", "Phone number", "Date joined", "Status"].map((header) => (
              <th key={header}>
                <div>
                  <span>{header}</span>
                  <img
                    src={`${BASE}/filter-icon.svg`}
                    alt="filter"
                    onClick={() =>
                      setShowFilter(header === "Organization" ? !showFilter : false)
                    }
                  />
                </div>
                {header === "Organization" && showFilter && <FilterForm />}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <span
                  style={{ cursor: "pointer", color: "#545f7d" }}
                  onClick={() => handleViewUser(user)}
                >
                  {user.orgName}
                </span>
              </td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>
                <span className={`status ${user.status}`}>
                  {user.status}
                </span>
              </td>
              <td style={{ position: "relative" }}>
                <img
                  src={`${BASE}/more-icon.svg`}
                  alt="more"
                  onClick={() =>
                    setOpenDropdown(openDropdown === user.id ? null : user.id)
                  }
                />
                {openDropdown === user.id && (
                  <MoreDropDown
                    userId={user.id}
                    user={user}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;