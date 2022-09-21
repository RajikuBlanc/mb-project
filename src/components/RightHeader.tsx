import { css } from "@emotion/react";
import Link from "next/link";

type Props = {};

const RightHeader = (props: Props) => {
  const Title = css`
    color: black;
    font-size: 3rem;
    text-transform: uppercase;
    transition: text-transform 5s ease;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Link href="/" passHref>
        <a css={Title}>home</a>
      </Link>
      <Link href="/create" passHref>
        <a css={Title}>create</a>
      </Link>
      <Link href="/questions" passHref>
        <a css={Title}>questions</a>
      </Link>
      <Link href="/print" passHref>
        <a css={Title}>print</a>
      </Link>
      <Link href="/user" passHref>
        <a css={Title}>user</a>
      </Link>
    </div>
  );
};

export default RightHeader;
