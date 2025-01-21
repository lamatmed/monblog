declare module 'react-simple-typewriter' {
    export function useTypewriter(props: {
      words: string[];
      loop?: boolean;
      delaySpeed?: number;
      typeSpeed?: number;
      deleteSpeed?: number;
    }): {
      text: string;
      count: number;
      isTyping: boolean;
    };
  
    export const Cursor: React.FC<{ cursorStyle?: string; blink?: boolean }>;
  
    export default function Typewriter(props: {
      words: string[];
      loop?: number | boolean;
      delaySpeed?: number;
      cursor?: boolean;
      cursorStyle?: string;
      typeSpeed?: number;
      deleteSpeed?: number;
    }): JSX.Element;
  }
  