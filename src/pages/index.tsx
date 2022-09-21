import RightHeader from "@/components/RightHeader";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      css={css`
        display: flex;
        gap: 2rem;
      `}
    >
      {/* Right Header */}
      <RightHeader />
      {/* Main */}
      <main
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1>Hello</h1>
        <Link href="/category" passHref>
          <a
            css={css`
              font-size: 2rem;
              font-weight: bold;
              color: lightblue;
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
              color: lightblue;
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
      </main>
    </div>
  );
};

export default Home;
