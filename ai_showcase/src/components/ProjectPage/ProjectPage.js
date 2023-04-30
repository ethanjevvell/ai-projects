import { projects } from "../../portfolio";
import Projects from "../Projects/Projects";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

export default function ProjectPage() {
  const { projectName } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

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
      <ReactMarkdown
        rehypePlugins={[rehypeKatex]}
        remarkPlugins={[remarkMath]}
        children={markdownContent}
      />
      <Projects />
    </div>
  );
}
