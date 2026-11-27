import * as React from "react";
import { cn, prefersReducedMotion } from "../lib/cn";

export interface StackCard {
  id: string;
  content: React.ReactNode;
}

export interface SwipeCardStackProps {
  cards: StackCard[];
  /** Called with the card and direction when a card is thrown off the stack. */
  onSwipe?: (card: StackCard, dir: "left" | "right") => void;
  /** Distance in px past which a release throws the card. */
  threshold?: number;
  className?: string;
}

/**
 * A stack of cards you drag left/right to dismiss (Tinder-style), with a spring-back
 * when released early. Also works with ← / → keys for keyboard users.
 */
export function SwipeCardStack({ cards, onSwipe, threshold = 110, className }: SwipeCardStackProps) {
  const [deck, setDeck] = React.useState(cards);
  const [drag, setDrag] = React.useState({ x: 0, y: 0, active: false });
  const [leaving, setLeaving] = React.useState<null | "left" | "right">(null);
  const start = React.useRef({ x: 0, y: 0 });
  const reduced = React.useMemo(prefersReducedMotion, []);

  React.useEffect(() => setDeck(cards), [cards]);

  const dismiss = (dir: "left" | "right") => {
    const top = deck[0];
    if (!top) return;
    setLeaving(dir);
    window.setTimeout(
      () => {
        setDeck((d) => d.slice(1));
        setLeaving(null);
        setDrag({ x: 0, y: 0, active: false });
        onSwipe?.(top, dir);
      },
      reduced ? 0 : 280,
    );
  };

  return (
    <div
      className={cn("relative h-[420px] w-[300px] outline-none", className)}
      tabIndex={0}
      aria-label="Card stack. Use left and right arrow keys to dismiss."
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") dismiss("left");
        if (e.key === "ArrowRight") dismiss("right");
      }}
    >
      {deck
        .slice(0, 3)
        .map((card, i) => {
          const isTop = i === 0;
          let transform = `translateY(${i * 10}px) scale(${1 - i * 0.04})`;
          if (isTop && leaving) transform = `translateX(${leaving === "left" ? -600 : 600}px) rotate(${leaving === "left" ? -30 : 30}deg)`;
          else if (isTop) transform = `translate(${drag.x}px, ${drag.y}px) rotate(${drag.x / 18}deg)`;
          return (
            <div
              key={card.id}
              className="absolute inset-0 cursor-grab touch-none rounded-3xl bg-white shadow-xl active:cursor-grabbing"
              style={{
                zIndex: 10 - i,
                transform,
                transition: drag.active && isTop ? "none" : reduced ? "none" : "transform 300ms cubic-bezier(.2,.8,.2,1)",
              }}
              onPointerDown={
                isTop
                  ? (e) => {
                      (e.target as HTMLElement).setPointerCapture(e.pointerId);
                      start.current = { x: e.clientX, y: e.clientY };
                      setDrag({ x: 0, y: 0, active: true });
                    }
                  : undefined
              }
              onPointerMove={isTop && drag.active ? (e) => setDrag({ x: e.clientX - start.current.x, y: e.clientY - start.current.y, active: true }) : undefined}
              onPointerUp={
                isTop
                  ? () => {
                      if (Math.abs(drag.x) > threshold) dismiss(drag.x < 0 ? "left" : "right");
                      else setDrag({ x: 0, y: 0, active: false });
                    }
                  : undefined
              }
            >
              {card.content}
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
