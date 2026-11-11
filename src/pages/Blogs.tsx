import { type ReactNode } from 'react';
import { BLOG_POSTS, PROFILE, type BlogPost } from '../data';
import { ArrowUpRightIcon } from '../components/Icons';

function HatchedBand() {
  return <div className="w-full h-7 border-b pf-border pf-hatch" />;
}

function formatInlineText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="pf-title font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderPlainEnglishPost(content: string): ReactNode[] {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line === '...' || line === '---') {
      elements.push(
        <div
          key={`div-${i}`}
          className="py-4 text-center tracking-[0.6em] pf-muted select-none"
        >
          ...
        </div>
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-lg sm:text-xl font-bold pf-title tracking-tight pt-4"
        >
          {formatInlineText(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-base sm:text-lg font-bold pf-title tracking-tight pt-3"
        >
          {formatInlineText(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      elements.push(
        <blockquote
          key={`quote-${i}`}
          className="border-l-[3px] pf-border pl-4 italic pf-title space-y-1 my-4"
        >
          {quoteLines.map((qLine, qIdx) => (
            <p key={qIdx}>{formatInlineText(qLine)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))
      ) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-5 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>{formatInlineText(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    elements.push(<p key={`p-${i}`}>{formatInlineText(line)}</p>);
    i++;
  }

  return elements;
}

export default function Blogs({
  selectedPostId,
  onSelectPost,
  onOpenHome,
  onOpenAbout,
  onOpenProjects,
}: {
  selectedPostId: string | null;
  onSelectPost: (postId: string | null) => void;
  onOpenHome: () => void;
  onOpenAbout: () => void;
  onOpenProjects: () => void;
}) {
  const activePost: BlogPost | undefined = selectedPostId
    ? BLOG_POSTS.find((p) => p.id === selectedPostId)
    : undefined;

  if (activePost) {
    return (
      <div className="w-full pf-bg">
        <article className="max-w-[680px] mx-auto px-5 py-10 sm:py-12">
          <div className="mb-6">
            <button
              onClick={() => {
                onSelectPost(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono pf-muted hover:underline cursor-pointer"
            >
              <span>&larr; All posts</span>
            </button>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold pf-title tracking-tight leading-[1.2] mb-8">
            {activePost.title}
          </h1>

          {activePost.coverImage && (
            <div className="w-full h-56 sm:h-80 rounded-lg overflow-hidden border pf-border mb-8 bg-zinc-900">
              <img
                src={activePost.coverImage}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-5 text-[15.5px] sm:text-[16.5px] pf-text leading-[1.8]">
            {renderPlainEnglishPost(activePost.content)}
          </div>
        </article>

        <footer className="max-w-[680px] mx-auto border-t pf-border px-5 py-9 flex flex-col items-center gap-4 text-xs pf-muted">
          <nav className="flex flex-wrap items-center justify-center gap-6 pf-text font-medium">
            <button onClick={onOpenHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <button onClick={onOpenAbout} className="hover:underline cursor-pointer">
              About
            </button>
            <button onClick={onOpenProjects} className="hover:underline cursor-pointer">
              Projects
            </button>
            <button
              onClick={() => {
                onSelectPost(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline cursor-pointer"
            >
              Blogs
            </button>
            <a
              href={PROFILE.resumeUrl}
              download="Aman_Verma_Resume.pdf"
              className="hover:underline"
            >
              Resume
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </nav>

          <div
            className="text-[11px]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="w-full">
      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-8">
          <div className="flex items-baseline gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-bold pf-title tracking-tight">
              Blogs
            </h1>
            <span
              className="text-xs pf-muted"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              ({BLOG_POSTS.length})
            </span>
          </div>
        </div>
      </div>

      <HatchedBand />

      <div className="w-full border-b pf-border">
        <div className="max-w-[820px] mx-auto border-x pf-border">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                onSelectPost(post.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 sm:p-8 border-b pf-border last:border-b-0 pf-hover transition-colors cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
                <div className="flex-1 min-w-0">
                  <div
                    className="flex flex-wrap items-center gap-2 text-[11px] pf-muted mb-2.5"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold pf-title group-hover:underline leading-snug mb-2">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-[13.5px] pf-text leading-relaxed mb-4">
                    {post.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full pf-pill border pf-border text-[10.5px] pf-text"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1 text-xs font-medium pf-title ml-auto sm:ml-2 group-hover:translate-x-0.5 transition-transform">
                      <span>Read article</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {post.coverImage && (
                  <div className="w-full sm:w-40 h-36 sm:h-28 rounded-lg overflow-hidden border pf-border shrink-0 bg-zinc-900">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <HatchedBand />

      <div className="w-full">
        <footer className="max-w-[820px] mx-auto border-x pf-border px-5 sm:px-8 py-9 flex flex-col items-center gap-4 text-xs pf-muted">
          <nav className="flex flex-wrap items-center justify-center gap-6 pf-text font-medium">
            <button onClick={onOpenHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <button onClick={onOpenAbout} className="hover:underline cursor-pointer">
              About
            </button>
            <button onClick={onOpenProjects} className="hover:underline cursor-pointer">
              Projects
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline cursor-pointer"
            >
              Blogs
            </button>
            <a
              href={PROFILE.resumeUrl}
              download="Aman_Verma_Resume.pdf"
              className="hover:underline"
            >
              Resume
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </nav>

          <div
            className="text-[11px]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}