'use client';

import React from 'react';
import { Lightbulb, Info, CheckCircle2, AlertTriangle, ArrowRight, Table } from 'lucide-react';

interface Props {
  content: string;
}

/**
 * Parses inline formatting like **bold**, *italic*, `code`, and $math$
 */
export function renderInlineFormattedText(text: string): React.ReactNode[] {
  // Split on bold, italic, code, and LaTeX math tokens
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  // Pattern matches:
  // 1. Math formulas $\text{...}$ or $...$
  // 2. Bold text **...**
  // 3. Italic text *...* or _..._
  // 4. Code snippets `...`
  const tokenRegex = /(\$[^$]+\$|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/;

  while (remaining.length > 0) {
    const match = remaining.match(tokenRegex);
    if (!match || match.index === undefined) {
      parts.push(remaining);
      break;
    }

    if (match.index > 0) {
      parts.push(remaining.substring(0, match.index));
    }

    const token = match[0];
    if (token.startsWith('$') && token.endsWith('$')) {
      // Clean up raw LaTeX markers like \text{}, \propto, \sqrt{}, \text{ liters}
      const rawMath = token.slice(1, -1);
      const humanMath = rawMath
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\mathrm\{([^}]+)\}/g, '$1')
        .replace(/\\propto/g, ' ∝ ')
        .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
        .replace(/\\times/g, ' × ')
        .replace(/\\pm/g, ' ± ')
        .replace(/\\approx/g, ' ≈ ')
        .replace(/\\le/g, ' ≤ ')
        .replace(/\\ge/g, ' ≥ ')
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
        .replace(/\\Delta/g, 'Δ')
        .replace(/\\lambda/g, 'λ')
        .replace(/\\nu/g, 'ν')
        .replace(/\\theta/g, 'θ')
        .replace(/\\/g, '');

      parts.push(
        <span
          key={`math-${keyIndex++}`}
          className="font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--sci-soft)]/60 text-[var(--sci)] text-[13px] inline-block shadow-xs border border-[var(--sci)]/20"
        >
          {humanMath}
        </span>
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={`b-${keyIndex++}`} className="font-bold text-[var(--ink)]">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={`em-${keyIndex++}`} className="italic text-[var(--ink)]">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code
          key={`code-${keyIndex++}`}
          className="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--card)] border border-[var(--rule)] text-[var(--sci)]"
        >
          {token.slice(1, -1)}
        </code>
      );
    }

    remaining = remaining.substring(match.index + token.length);
  }

  return parts;
}

export function ScienceContentRenderer({ content }: Props) {
  if (!content) return null;

  // Parse lines into logical blocks: headings, tables, bullet lists, numbered lists, blockquotes, and paragraphs
  const rawLines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const line = rawLines[i].trimEnd();
    const trimmed = line.trim();

    // 1. Skip blank lines
    if (!trimmed) {
      i++;
      continue;
    }

    // 2. Markdown Table Detection (line starts with | and contains |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith('|') && rawLines[i].trim().endsWith('|')) {
        tableLines.push(rawLines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        // First line is header
        const headerCells = tableLines[0]
          .slice(1, -1)
          .split('|')
          .map((c) => c.trim());

        // Skip divider line (e.g. | :--- | :--- |)
        const rowLines = tableLines.slice(2);

        elements.push(
          <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-2xl border border-[var(--rule)] bg-[var(--sheet)] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--sci-soft)]/50 border-b border-[var(--rule)]">
                  {headerCells.map((header, hIdx) => (
                    <th
                      key={hIdx}
                      className="px-4 py-3 font-bold text-[var(--ink)] uppercase tracking-wider text-[11px] first:rounded-tl-2xl last:rounded-tr-2xl"
                    >
                      {renderInlineFormattedText(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--rule)]">
                {rowLines.map((row, rIdx) => {
                  const cells = row
                    .slice(1, -1)
                    .split('|')
                    .map((c) => c.trim());
                  return (
                    <tr
                      key={rIdx}
                      className="hover:bg-[var(--card)]/50 transition-colors even:bg-[var(--card)]/20"
                    >
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-[var(--ink)] leading-relaxed">
                          {renderInlineFormattedText(cell)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 3. Headings: ###, ##, #
    if (trimmed.startsWith('### ')) {
      const title = trimmed.replace(/^###\s+/, '');
      elements.push(
        <div key={`h3-${i}`} className="mt-8 mb-3 flex items-center gap-2.5 pb-2 border-b border-[var(--rule)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--sci)] shrink-0" />
          <h3
            className="text-lg sm:text-xl font-black text-[var(--ink)] tracking-tight"
            style={{ fontFamily: 'var(--display)' }}
          >
            {renderInlineFormattedText(title)}
          </h3>
        </div>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      const title = trimmed.replace(/^##\s+/, '');
      elements.push(
        <div key={`h2-${i}`} className="mt-10 mb-4 pb-2 border-b-2 border-[var(--sci)]/40 flex items-center gap-3">
          <span className="text-xl">🔬</span>
          <h2
            className="text-xl sm:text-2xl font-black text-[var(--ink)] tracking-tight"
            style={{ fontFamily: 'var(--display)' }}
          >
            {renderInlineFormattedText(title)}
          </h2>
        </div>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith('# ')) {
      const title = trimmed.replace(/^#\s+/, '');
      elements.push(
        <h1
          key={`h1-${i}`}
          className="text-2xl sm:text-3xl font-black text-[var(--ink)] mt-6 mb-3 tracking-tight"
          style={{ fontFamily: 'var(--display)' }}
        >
          {renderInlineFormattedText(title)}
        </h1>
      );
      i++;
      continue;
    }

    // 4. Bullet list items (* or -)
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      const bulletItems: string[] = [];
      while (
        i < rawLines.length &&
        (rawLines[i].trim().startsWith('* ') || rawLines[i].trim().startsWith('- '))
      ) {
        bulletItems.push(rawLines[i].trim().replace(/^[\*\-]\s+/, ''));
        i++;
      }

      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2.5 pl-1">
          {bulletItems.map((item, bIdx) => (
            <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-[var(--sci)] mt-2 shrink-0 shadow-xs" />
              <div className="flex-1">{renderInlineFormattedText(item)}</div>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 5. Numbered list items (1., 2., etc.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const numberedItems: { num: string; text: string }[] = [];
      while (i < rawLines.length && /^\d+\.\s+/.test(rawLines[i].trim())) {
        const itemLine = rawLines[i].trim();
        const match = itemLine.match(/^(\d+)\.\s+(.*)/);
        if (match) {
          numberedItems.push({ num: match[1], text: match[2] });
        }
        i++;
      }

      elements.push(
        <div key={`ol-${i}`} className="my-5 space-y-3">
          {numberedItems.map((item, nIdx) => (
            <div
              key={nIdx}
              className="rounded-2xl border border-[var(--rule)] bg-[var(--card)] p-4 flex items-start gap-3.5 shadow-xs hover:border-[var(--sci)]/40 transition-colors"
            >
              <div className="w-7 h-7 rounded-xl bg-[var(--sci)] text-white text-xs font-black flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                {item.num}
              </div>
              <div className="text-sm sm:text-base text-[var(--ink)] leading-relaxed flex-1">
                {renderInlineFormattedText(item.text)}
              </div>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // 6. Blockquote or Callout (> Note: or > )
    if (trimmed.startsWith('>')) {
      const quoteText = trimmed.replace(/^>\s*/, '');
      elements.push(
        <div
          key={`quote-${i}`}
          className="my-5 p-4 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 text-amber-900 dark:text-amber-200 text-sm leading-relaxed flex items-start gap-3"
        >
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="flex-1 font-medium">{renderInlineFormattedText(quoteText)}</div>
        </div>
      );
      i++;
      continue;
    }

    // 7. Standard Paragraph
    elements.push(
      <p
        key={`p-${i}`}
        className="text-sm sm:text-base text-[var(--ink)] leading-relaxed my-3 font-normal"
      >
        {renderInlineFormattedText(trimmed)}
      </p>
    );
    i++;
  }

  return <div className="space-y-2">{elements}</div>;
}
