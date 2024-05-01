import clsx from "clsx";
import S from "./index.module.scss";

export const LoadingAnimation = () => {
  return (
    <div className={S.body}>
      <div className={clsx(S.ring, "circle", "red")} />
      <div className={clsx(S.ring, "circle", "blue")} />
      <div className={clsx(S.ring, "circle", "green")} />
      <div className={clsx(S.ring, "circle", "yellow")} />
      <div className={clsx(S.ring, "circle", "orange")} />
    </div>
  );
};
