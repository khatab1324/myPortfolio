import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";
import clsx from "clsx";
import { HighlightBash } from "./highlightBash";
import processingInput from "@/processingInput";

interface TerminalBlockProps {
  commands: Array<{
    type: CommandType;
    content: string;
    prompt?: string;
  }>;
  title?: string;
  className?: string;
}
export enum CommandType {
  COMMAND = "command",
  OUTPUT = "output",
  COMMENT = "comment",
  ERROR = "error",
}

export default function MyTerminal({
  commands,
  title = "Terminal",
  className,
}: TerminalBlockProps) {
  const [currentInput, setCurrentInput] = useState("");
  const [commandsState, setCommandsState] = useState(commands);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [commandsState]);
  const getLineStyle = (type: string) => {
    switch (type) {
      case "command":
        return "text-gray-200";
      case "output":
        return "text-green-300";
      case "comment":
        return "text-gray-400 italic";
      case "error":
        return "text-red-400";
      default:
        return "text-gray-200";
    }
  };

  return (
    <div
      className={clsx(
        "rounded-lg border border-indigo-950 bg-gradient-to-br from-purple-900 to-indigo-900 shadow-3xl w-1.0 sm:w-2xl z-10",
        className
      )}
    >
      <div className="rounded-t-lg flex items-center justify-between px-4 py-3 bg-gray-950 ">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-purple-300" />
            <span className="text-sm text-purple-200 font-medium">{title}</span>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="rounded-b-lg p-4 font-mono text-sm leading-relaxed bg-gradient-to-br from-gray-900 to-black h-[300px] overflow-y-auto "
      >
        {commandsState.map((cmd, index) => (
          <div key={index} className="flex mb-1 ">
            {cmd.type === "command" && (
              <span className="text-indigo-800 mr-2 select-none font-bold">
                $
              </span>
            )}
            <span className={getLineStyle(cmd.type)}>
              {cmd.type === "command" ? (
                <HighlightBash content={cmd.content} />
              ) : (
                <span dangerouslySetInnerHTML={{ __html: cmd.content }} />
              )}
            </span>
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-indigo-900 mr-2 font-bold text-lg">
            {"->"}{" "}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && currentInput.trim() !== "") {
                if (currentInput.toLowerCase() === "clear") {
                  setCommandsState([]);
                  setCurrentInput("");
                  return;
                }
                const resultOfProcessing = processingInput(currentInput);
                setCommandsState((prev) => [
                  ...prev,
                  { type: CommandType.COMMAND, content: currentInput },
                  {
                    type: resultOfProcessing.type,
                    content: resultOfProcessing.content,
                  },
                ]);
                setCurrentInput("");
              }
            }}
            className="flex-1 bg-transparent text-gray-200 outline-none font-mono"
            placeholder="try 'help'"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
