import { Logo } from "@features/accessories";
import S from "./index.module.scss";

export const LoadingPage = () => {
  return (
    <div className={S.body}>
      <Logo width="80px" fontSize="22px" />
    </div>
  );
};
