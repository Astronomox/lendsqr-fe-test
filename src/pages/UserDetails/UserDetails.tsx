import { FC, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { User } from "../../types";
import { getSelectedUser, getUsers } from "../../utils/storage";
import Loader from "../../components/common/Loader";
import "../../styles/user-details.scss";

const BASE = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images/icons";
const userNavItems = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

const UserDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const selected = getSelectedUser();
      if (selected && selected.id === id) {
        setUser(selected);
        setLoading(false);
        return;
      }

      const allUsers = getUsers();
      if (allUsers) {
        const found = allUsers.find((u) => u.id === id);
        if (found) {
          setUser(found);
          setLoading(false);
          return;
        }
      }

      setLoading(false);
    }, 1500);
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  }

  if (!user) {
    return (
      <section className="user-details">
        <Link to="/dashboard/users" className="back">
          <img src={`${BASE}/back-icon.svg`} alt="back" />
          <span>Back to Users</span>
        </Link>
        <p style={{ marginTop: "30px", color: "#545f7d" }}>User not found.</p>
      </section>
    );
  }

  return (
    <section className="user-details">
      <Link to="/dashboard/users" className="back">
        <img src={`${BASE}/back-icon.svg`} alt="back" />
        <span>Back to Users</span>
      </Link>

      <div className="header-btns">
        <h1>User Details</h1>
        <div>
          <button type="button">BLACKLIST USER</button>
          <button type="button">ACTIVATE USER</button>
        </div>
      </div>

      <div className="user-header">
        <div className="user-header-info">
          <div>
            <div className="user-avatar">
              <img
                src={user.profile?.avatar || `${BASE}/../user-avatar.svg`}
                alt="avatar"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="user-name-bvn">
              <p>{user.profile?.firstName} {user.profile?.lastName}</p>
              <p>{user.profile?.bvn}</p>
            </div>
          </div>

          <div className="user-tier">
            <p>User's Tier</p>
            <div className="star-rating">
              <img src={`${BASE}/star-filled.svg`} alt="star" />
              <img src={`${BASE}/star-outline.svg`} alt="star" />
              <img src={`${BASE}/star-outline.svg`} alt="star" />
            </div>
          </div>

          <div className="user-account">
            <p>₦{user.accountBalance}</p>
            <p>{user.accountNumber}/Providus Bank</p>
          </div>
        </div>

        <div className="user-header-nav">
          {userNavItems.map((item, index) => (
            <Link key={index} to="#">
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="user-details-main">
        <div className="user-info-card">
          <h2>Personal Information</h2>
          <div className="user-info-main">
            <div><p>FULL NAME</p><p>{user.profile?.firstName} {user.profile?.lastName}</p></div>
            <div><p>Phone Number</p><p>{user.profile?.phoneNumber}</p></div>
            <div><p>Email Address</p><p>{user.email}</p></div>
            <div><p>BVN</p><p>{user.profile?.bvn}</p></div>
            <div><p>Gender</p><p>{user.profile?.gender}</p></div>
            <div><p>Marital Status</p><p>Single</p></div>
            <div><p>Children</p><p>None</p></div>
            <div><p>Type of Residence</p><p>Parent's Apartment</p></div>
          </div>
        </div>

        <div className="user-info-card">
          <h2>Education and Employment</h2>
          <div className="user-info-main">
            <div><p>Level of Education</p><p>{user.education?.level}</p></div>
            <div><p>Employment Status</p><p>{user.education?.employmentStatus}</p></div>
            <div><p>Sector of Employment</p><p>{user.education?.sector}</p></div>
            <div><p>Duration of Employment</p><p>{user.education?.duration}</p></div>
            <div><p>Office Email</p><p>{user.education?.officeEmail}</p></div>
            <div><p>Monthly Income</p><p>₦{user.education?.monthlyIncome[0]} - ₦{user.education?.monthlyIncome[1]}</p></div>
            <div><p>Loan Repayment</p><p>₦{user.education?.loanRepayment}</p></div>
          </div>
        </div>

        <div className="user-info-card">
          <h2>Socials</h2>
          <div className="user-info-main">
            <div><p>Twitter</p><p>{user.socials?.twitter}</p></div>
            <div><p>Facebook</p><p>{user.socials?.facebook}</p></div>
            <div><p>Instagram</p><p>{user.socials?.instagram}</p></div>
          </div>
        </div>

        <div className="user-info-card">
          <h2>Guarantor</h2>
          <div className="user-info-main">
            <div><p>Full Name</p><p>{user.guarantor?.firstName} {user.guarantor?.lastName}</p></div>
            <div><p>Phone Number</p><p>{user.guarantor?.phoneNumber}</p></div>
            <div><p>Address</p><p>{user.guarantor?.address}</p></div>
            <div><p>Relationship</p><p>Sister</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;