import { useState, useCallback } from 'react';

export function useCopyToClipboard(resetDelay = 2500) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (text) => {
      if (!text) return false;
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for legacy environments
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), resetDelay);
        return true;
      } catch (err) {
        console.error('Failed to copy text: ', err);
        setIsCopied(false);
        return false;
      }
    },
    [resetDelay]
  );

  return { isCopied, copyToClipboard };
}
