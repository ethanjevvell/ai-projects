import { projects } from "../../portfolio";
import Projects from "../Projects/Projects";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark, coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "@mui/material/Button"
import {Link} from "react-router-dom";

export default function ProjectPage() {
  const { projectName } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  const renderers = {
    // Ensures equations will be centered horizontally
    img: ({ src, alt }) => (
      <figure style={{ display: 'inline-block', textAlign: 'center', width: '100%' }}>
        <img src={src} alt={alt} style={{ display: 'inline', marginTop: '0.5rem' }} />
      </figure>
    ),
  };

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const markdownFilePath = `/markdown/${projectName.toLowerCase()}.md`;
        const response = await fetch(markdownFilePath);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error("Error fetching the Markdown content:", error);
        // Handle the error or set a default content if the file is not found
      }
    };

    fetchMarkdownContent();
  }, [projectName]);

  if (!projects.length) return null;

  return (
    <div id="project-page-main-container">
      <Link to="/">
        <Button variant="outlined">Return to Projects</Button>
      </Link>
      <div className="markdown-content">
        <ReactMarkdown
          rehypePlugins={[rehypeKatex]}
          remarkPlugins={[remarkMath]}
          children={markdownContent}
          components={{
            ...renderers,
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const language = match ? match[1] : "python";

              if (inline) {
                return (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    style={coldarkCold}
                    language={language}
                    PreTag="span"
                    customStyle={{ display: "inline", padding: "2px" }}
                  />
                );
              }

              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={coldarkDark}
                  language={language}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
        <Projects />
      </div>
    </div>
  );
}
