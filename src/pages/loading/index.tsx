import { LoadingAnimation, Logo } from "@features/accessories";
import S from "./index.module.scss";

export const LoadingPage = () => {
  return (
    <div className={S.body}>
      <div className={S.logo}>
        <Logo width="80px" fontSize="22px" />
        <LoadingAnimation />
      </div>
    </div>
  );
};
