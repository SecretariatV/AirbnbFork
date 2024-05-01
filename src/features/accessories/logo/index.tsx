import * as S from "./index.styled";

export const Logo = ({
  width,
  fontSize,
}: {
  width: string;
  fontSize: string;
}) => {
  return (
    <S.Container $width={width} $fontSize={fontSize}>
      <div className="circle">
        <span className="eye">B</span>
        <span className="mouth">V</span>
      </div>
    </S.Container>
  );
};
