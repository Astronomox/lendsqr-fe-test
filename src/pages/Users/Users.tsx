import { useState, useEffect } from "react";
import { fetchUsers } from "../../services/api";
import { User } from "../../types";
import UsersStats from "../../components/users/UsersStats";
import UsersTable from "../../components/users/UsersTable";
import "../../styles/users.scss";

const BASE = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images/icons";
const itemsPerPage = 9;

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    loadUsers();
  }, []);

  const pageCount = Math.ceil(users.length / itemsPerPage);
  const itemOffset = currentPage * itemsPerPage;
  const currentItems = users.slice(itemOffset, itemOffset + itemsPerPage);

  const handlePageClick = (page: number) => {
    if (page >= 0 && page < pageCount) setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (pageCount <= 5) {
      for (let i = 0; i < pageCount; i++) pages.push(i);
    } else {
      pages.push(0);
      if (currentPage > 2) pages.push("...");
      for (
        let i = Math.max(1, currentPage - 1);
        i <= Math.min(pageCount - 2, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < pageCount - 3) pages.push("...");
      pages.push(pageCount - 1);
    }
    return pages;
  };

  return (
    <section className="users">
      <h1>Users</h1>
      <div>
        <UsersStats />
        {loading ? (
          <div className="loader">
            <img
              src="https://joy-okwudire-lendsqr-fe-test.vercel.app/images/loader.gif"
              alt="loading"
            />
          </div>
        ) : (
          <>
            <UsersTable users={currentItems} loading={loading} />
            <div className="users-paginate">
              <div className="user-page-info">
                <p>
                  Showing{" "}
                  <span>
                    {Math.min(itemOffset + itemsPerPage, users.length)}{" "}
                    <img src={`${BASE}/down-arrow.svg`} alt="down arrow" />
                  </span>{" "}
                  out of {users.length}
                </p>
              </div>
              <div className="pagination">
                <button
                  className="arrow"
                  onClick={() => handlePageClick(currentPage - 1)}
                  disabled={currentPage === 0}
                >{"<"}</button>

                {getPageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span key={`dots-${index}`} className="page-dots">...</span>
                  ) : (
                    <button
                      key={page}
                      className={`page-btn ${currentPage === page ? "active" : ""}`}
                      onClick={() => handlePageClick(page as number)}
                    >
                      {(page as number) + 1}
                    </button>
                  )
                )}

                <button
                  className="arrow"
                  onClick={() => handlePageClick(currentPage + 1)}
                  disabled={currentPage === pageCount - 1}
                >{">"}</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Users;