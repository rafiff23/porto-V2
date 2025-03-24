import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface PreloadProps {
  endedLoading: boolean;
}

export default function Preload({ endedLoading }: PreloadProps) {
  const textRef = useRef<HTMLDivElement>(null);

  const words = [
    "Hello", "Hallo", "Bonjour", "Hola", "Ciao",
    "こんにちは", "안녕하세요", "مرحبا", "Привет", "नमस्ते", "你好"
  ];

  useEffect(() => {
    if (!textRef.current) return;
  
    const tl = gsap.timeline({ repeat: -1 });
  
    const handleComplete = (word: string) => (): void => {
      if (textRef.current) {
        textRef.current.innerText = word;
      }
    };
  
    words.forEach((word) => {
      tl.to(textRef.current, {
        opacity: 0,
        duration: 0,
        onComplete: handleComplete(word),
      })
        .to(textRef.current, { opacity: 1, duration: 0 })
        .to(textRef.current, { opacity: 0, duration: 0.1, delay: 0.1 });
    });
  
    // ✅ Proper fix — just kill timeline, do not return the result
    return () => {
      tl.kill(); // panggil tapi tidak return Timeline-nya
    };
  }, []);
  
  

  return (
    <div
      className={cn(
        "flex min-h-screen w-full items-center justify-center opacity-100 transition-opacity duration-500 ease-in-out bg-background text-foreground",
        endedLoading && "opacity-0"
      )}
    >
      <div
        ref={textRef}
        className="text-6xl md:text-8xl lg:text-9xl font-extrabold opacity-0 transition-opacity duration-300"
      >
        Hello
      </div>
    </div>
  );
}
