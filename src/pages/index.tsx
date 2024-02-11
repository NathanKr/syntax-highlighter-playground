import { GetStaticProps, NextPage } from "next";
import Prism from "prismjs";
import loadLanguages from "prismjs/components/index";
import "prismjs/themes/prism-tomorrow.css";

interface IProps {
  __html: string;
}

export const getStaticProps: GetStaticProps = async () => {
  
  // Load all languages.
  loadLanguages();

  
  const snippet = `
    $greeting = 'Hello, world!';
    echo $greeting;
  `;

  const highlightHtml = `<h1>hello</h1><pre><code>${Prism.highlight(
    snippet,
    Prism.languages.php,
    "php"
  )}</pre></code>`;

  
  let props: IProps = { __html: highlightHtml };

  return {
    props, // will be passed to the page component as props
  };
};

const Home: NextPage<IProps> = ({ __html }) => {
  return <div dangerouslySetInnerHTML={{ __html }}></div>;
};

export default Home;
