import clsx from "clsx";
import { useAppDispatch } from "../../hooks";
import { filterByPriority, filterByStatus } from "../../redux/filters/slice";
import css from "./NotesFilters.module.css";
import { useSelector } from "react-redux";
import {
  selectFilterByPriority,
  selectFilterByStatus,
} from "../../redux/filters/selectors";

type FilterStatus = "all" | "active" | "done";
type FilterPriority = "all" | "high" | "medium" | "low";
const NotesFilters = () => {
  const dispatch = useAppDispatch();
  const getFilterByStatus = useSelector(selectFilterByStatus);
  const getFilterByPriority = useSelector(selectFilterByPriority);
  const handleFilterByStats = (value: FilterStatus = "all") => {
    dispatch(filterByStatus(value));
  };
  const handleFilterByPriority = (value: FilterPriority = "all") => {
    dispatch(filterByPriority(value));
    console.log(value);
  };
  //   const activeStatsBtn = (value)=>{
  //     clsx()
  //   }
  return (
    <div>
      <div
        onClick={(e) => {
          const typeTarget = (e.target as HTMLElement).closest("button");
          if (typeTarget) {
            handleFilterByStats(typeTarget.name as FilterStatus);
          }
        }}
      >
        <button
          type="button"
          name="all"
          className={clsx(
            getFilterByStatus === "all" && css.activeStats,
            css.statsBtn,
          )}
        >
          all
        </button>
        <button
          type="button"
          name="active"
          className={clsx(
            getFilterByStatus === "active" && css.activeStats,
            css.statsBtn,
          )}
        >
          active
        </button>
        <button
          type="button"
          name="done"
          className={clsx(
            getFilterByStatus === "done" && css.activeStats,
            css.statsBtn,
          )}
        >
          done
        </button>
      </div>
      <div
        onClick={(e) => {
          const typeTarget = e.target as HTMLInputElement;
          if (typeTarget) {
            handleFilterByPriority(typeTarget.value as FilterPriority);
          }
        }}
      >
        <label
          className={clsx(
            getFilterByPriority === "all" && css.activePriority,
            css.priorityBtn,
          )}
        >
          <span>All</span>
          <input type="radio" name="prioryty" value="all" defaultChecked />
        </label>
        <label
          className={clsx(
            getFilterByPriority === "high" && css.activePriority,
            css.priorityBtn,
          )}
        >
          <span>High</span>
          <input type="radio" name="prioryty" value="high" />
        </label>
        <label
          className={clsx(
            getFilterByPriority === "medium" && css.activePriority,
            css.priorityBtn,
          )}
        >
          <span>Medium</span>
          <input type="radio" name="prioryty" value="medium" />
        </label>
        <label
          className={clsx(
            getFilterByPriority === "low" && css.activePriority,
            css.priorityBtn,
          )}
        >
          <span>Low</span>
          <input type="radio" name="prioryty" value="low" />
        </label>
      </div>
    </div>
  );
};

export default NotesFilters;
//"all" | "high" | "medium" | "low"
