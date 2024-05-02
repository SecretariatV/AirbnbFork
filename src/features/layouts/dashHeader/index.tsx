import { BeforeHeader } from "./beforeHeader";
import S from "./index.module.scss";

export const DashboardHeader = () => {
  return (
    <div className={S.body}>
      <BeforeHeader />
    </div>
  );
};
