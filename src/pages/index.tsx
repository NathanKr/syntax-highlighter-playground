import { highlightCodeInHTMLString } from "@/utils/server/prism-utils";
import { GetStaticProps, NextPage } from "next";
import loadLanguages from "prismjs/components/index";
import "prismjs/themes/prism-tomorrow.css";
import styles from "@/styles/Home.module.css";

interface IProps {
  __html: string;
}

export const getStaticProps: GetStaticProps = async () => {
  // Load all languages.
  loadLanguages();

  const phpCode = `
    <pre><code class="language-php">
$greeting = 'Hello, world!';
echo $greeting;</code></pre>
    `;

  const tsCode = `
    <pre><code class="language-typescript">
enum Color {
  Red,
  Green,
  Blue
};

const selectedColor: Color = Color.Red;
console.log(selectedColor);
    </code></pre>
  `;
  const htmlString = `
  <h2>This is php highlight</h2>${phpCode}
  <h2>This is typescript highlight</h2>${tsCode}`;

  const highlightedHTML = highlightCodeInHTMLString(htmlString);

  let props: IProps = { __html: highlightedHTML };

  return {
    props, // will be passed to the page component as props
  };
};

const Home: NextPage<IProps> = ({ __html }) => {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html }}
    ></div>
  );
};

export default Home;
