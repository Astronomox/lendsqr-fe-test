import { FC } from "react";
import { usersStats } from "../../core/data";

const UsersStats: FC = () => {
  return (
    <div data-testid="users-stats" className="users-stats">
      {usersStats.map((item) => (
        <div key={item.id} className="users-stats-box">
          <img src={item.icon} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersStats;