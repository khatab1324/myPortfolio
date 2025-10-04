export const HighlightBash = ({ content }: { content: string }) => {
  const words = content.split(/(\s+)/);
  return (
    <span>
      {words.map((word, index) => {
        if (/^\s+$/.test(word)) {
          return (
            <span className="text-gray-600" key={index}>
              {word}
            </span>
          );
        }
        if (
          /^(Wellcom|git|npm|cd|cp|nano|brew|sudo|apt|psql|xcodebuild|pod|gradlew|npx|yarn|docker|Hello|hello|HELLO)$/.test(
            word
          )
        ) {
          return (
            <span
              key={index}
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-600"
            >
              {word}
            </span>
          );
        }
        if (/^['"`].*['"`]$/.test(word)) {
          return (
            <span key={index} className="text-yellow-300">
              {word}
            </span>
          );
        }
        if (/^\d+(\.\d+)?$/.test(word)) {
          return (
            <span key={index} className="text-blue-300">
              {word}
            </span>
          );
        }

        if (/^(https?:\/\/|\.\/|\.\.\/|\/)/.test(word)) {
          return (
            <span key={index} className="text-cyan-300">
              {word}
            </span>
          );
        }

        return (
          <span key={index} className="text-gray-300">
            {word}
          </span>
        );
      })}
    </span>
  );
};
