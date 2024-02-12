<h2>Introduction</h2>
A syntax highlighter is a software tool or feature commonly found in text editors, integrated development environments (IDEs), and code editors. Its purpose is to display source code with different colors and styles based on the language's syntax rules. This visual differentiation helps developers read and understand the code more easily by highlighting keywords, strings, comments, and other elements according to predefined rules.

<h2>Motivation</h2>
<p>My motivation is to use it for blog posts with code parts e.g. <a href='https://nathankrasney.com/posts/load-image-faster-with-webp'>Why Should You Use The Advanced WebP Image File Format</a>.</p> 
<p>This blog is part of next.js website</a>

<h2>Leading questions</h2>
Seems that are two popular : <a href='https://prismjs.com/'>prism</a> and <a href='https://highlightjs.org/'>highlightjs</a> so which one to choose

<h2>Constraints</h2>
I want to build the post with highlight on build time or at least server side for performance reasons

<h2>Package decision</h2>
Prism is lighter(not relevant for ssg) and faster according to the the first reference so i prefer it. it has also other benefits.

<h2>Usage</h2>
You MUST enclose the code with pre code elements and provide the code class

```typescript
import loadLanguages from "prismjs/components/index";
import "prismjs/themes/prism-tomorrow.css";


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
```

<h2>Points of interest</h2>
highlightCodeInHTMLString uses jsdom to create a dom tree from html string , use inside Prism.highlight on the code parts and re create the html string

<h2>References</h2>
<ul>
<li><a href='https://stackshare.io/stackups/highlightjs-vs-prism'>Prism vs highlight.js: What are the differences?</a></li>
<li><a href='https://www.youtube.com/watch?v=8ftIq9cgWMo'>How To Add Syntax Highlighting To Markdown With Next.js And Rehype Prism</a></li>
</ul>
