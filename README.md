<h2>Introduction</h2>
A syntax highlighter is a software tool or feature commonly found in text editors, integrated development environments (IDEs), and code editors. Its purpose is to display source code with different colors and styles based on the language's syntax rules. This visual differentiation helps developers read and understand the code more easily by highlighting keywords, strings, comments, and other elements according to predefined rules.

<h2>Motivation</h2>
<p>My motivation is to use it for blog posts with code parts e.g. <a href='https://nathankrasney.com/posts/load-image-faster-with-webp'>Why Should You Use The Advanced WebP Image File Format</a>.</p> 
<p>This blog is part of next.js website</a>

<h2>Leading questions</h2>
Seems that are two popular : <a href='https://prismjs.com/'>prism</a> and <a href='https://highlightjs.org/'>highlightjs</a> so which one to choose

<h2>Constraints</h2>
I want to build the post with highlight on build time or at least server side for performance reasons

<h2>package decision</h2>
Prism is lighter(not relevant for ssg) and faster(relevant for ssg ?) according to the the first reference so i prefer it. it has also other benefits.

<h2>References</h2>
<ul>
<li><a href='https://stackshare.io/stackups/highlightjs-vs-prism'>Prism vs highlight.js: What are the differences?</a></li>
<li><a href='https://www.youtube.com/watch?v=8ftIq9cgWMo'>How To Add Syntax Highlighting To Markdown With Next.js And Rehype Prism</a></li>
</ul>
