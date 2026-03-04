import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CodePreviewProps {
  code: string;
  language?: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ code, language = 'tsx' }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] group">
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-zinc-900/80 border border-white/10 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      
      <div className={cn(
        "p-6 overflow-hidden text-sm font-mono transition-all duration-500",
        !isExpanded && "max-h-[400px]"
      )}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={true}
          lineNumberStyle={{ minWidth: '3em', paddingRight: '1em', color: '#333' }}
          customStyle={{
            background: 'transparent',
            padding: 0,
            margin: 0,
          }}
        >
          {code}
        </SyntaxHighlighter>
        
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
        )}
      </div>

      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-white/10 hover:bg-zinc-800 transition-all text-[10px] font-black uppercase tracking-widest text-zinc-100 backdrop-blur-md"
        >
          {isExpanded ? 'Collapse Snippet' : 'Expand Snippet'}
        </button>
      </div>
    </div>
  );
};
