import { FC } from "react";
import { useForm } from "react-hook-form";

const FilterForm: FC = () => {
  const { register, reset, handleSubmit } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Organization</label>
        <select {...register("organization")}>
          <option value="">Select</option>
        </select>
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" placeholder="User" {...register("username")} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Email" {...register("email")} />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input type="date" {...register("date")} />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number" {...register("phone")} />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select {...register("status")}>
          <option value="">Select</option>
          <option value="active">Active</option>
        </select>
      </div>
      <div className="filter-btns">
        <button type="reset" onClick={() => reset()}>Reset</button>
        <button type="submit">Filter</button>
      </div>
    </form>
  );
};

export default FilterForm;