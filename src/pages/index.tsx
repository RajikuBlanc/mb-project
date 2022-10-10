import { css } from "@emotion/react";
import type { NextPage } from "next";
import Link from "next/link";
import Logo from "../../public/LOGO.svg";
import CreateIcon from "../../public/CREATE.svg";
import BookIcon from "../../public/BOOK.svg";
import UserIcon from "../../public/USER.svg";

const Home: NextPage = () => {
  // Style
  const flexRow = css`
    display: flex;
    gap: 2rem;
  `;
  const iconSize = css`
    border-radius: 50%;
    border: 3px solid #2d9cdb;
  `;

  return (
    <>
      <div css={flexRow}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          `}
        >
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Link href="/">
            <a>
              <CreateIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BookIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <UserIcon />
            </a>
          </Link>
        </div>

        {/* Main */}
        <main
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <Link href="/category" passHref>
            <a
              css={css`
                font-size: 2rem;
                font-weight: bold;
                color: #eb5757;
                text-transform: uppercase;
                transition: all 3s;
                &:hover {
                  text-decoration: underline;
                }
              `}
            >
              category
            </a>
          </Link>
          <Link href="/questions" passHref>
            <a
              css={css`
                font-size: 2rem;
                font-weight: bold;
                color: #eb5757;
                text-transform: uppercase;
                transition: all 3s;
                &:hover {
                  text-decoration: underline;
                }
              `}
            >
              questions
            </a>
          </Link>
          <Link href="/questions" passHref>
            <a
              css={css`
                font-size: 2rem;
                font-weight: bold;
                color: #eb5757;
                text-transform: uppercase;
                transition: all 3s;
                &:hover {
                  text-decoration: underline;
                }
              `}
            >
              test
            </a>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Home;
