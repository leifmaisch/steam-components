import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const premierBadgeVariants = cva("flex items-center isolation-isolate", {
  variants: {
    tier: {
      0: "tier-0",
      1: "tier-1",
      2: "tier-2",
      3: "tier-3",
      4: "tier-4",
      5: "tier-5",
      6: "tier-6",
    },
    size: {
      sm: "text-xs",
      md: "text-base",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    tier: 0,
    size: "md",
  },
});

const getTierFromRating = (rating: number) => {
  if (rating >= 30000) return 6;
  if (rating >= 25000) return 5;
  if (rating >= 20000) return 4;
  if (rating >= 15000) return 3;
  if (rating >= 10000) return 2;
  if (rating >= 5000) return 1;
  return 0;
};

const formatRating = (rating: number) => {
  return {
    large: rating.toLocaleString("en-US"),
    small: "",
  };
};

export interface PremierBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof premierBadgeVariants> {
  rating: number;
  size?: "sm" | "md" | "lg";
}

const PremierBadge = React.forwardRef<HTMLDivElement, PremierBadgeProps>(
  ({ className, rating, tier, size = "md", ...props }, ref) => {
    const calculatedTier = tier ?? getTierFromRating(rating);
    const ratingParts = formatRating(rating);

    const getDynamicWidth = (rating: number, size: "sm" | "md" | "lg") => {
      const digitCount = rating.toString().length;
      const baseWidths = {
        sm: { base: 1.8, perDigit: 0.2 },
        md: { base: 2.21875, perDigit: 0.25 },
        lg: { base: 2.8, perDigit: 0.3 },
      };
      const config = baseWidths[size];
      return Math.max(
        config.base,
        config.base + (digitCount - 4) * config.perDigit
      );
    };

    const dynamicWidth = getDynamicWidth(rating, size);

    return (
      <div
        className={cn(
          premierBadgeVariants({ tier: calculatedTier, size, className })
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center">
          <svg
            viewBox="0 0 17 32"
            className={cn(
              "z-[1]",
              size === "sm" && "w-[0.45em] h-[0.85em]",
              size === "md" && "w-[0.53125em] h-[1em]",
              size === "lg" && "w-[0.65em] h-[1.2em]"
            )}
            style={{
              color:
                calculatedTier === 0
                  ? "#b1c4d9"
                  : calculatedTier === 1
                  ? "#5e98d9"
                  : calculatedTier === 2
                  ? "#4c6aff"
                  : calculatedTier === 3
                  ? "#8847ff"
                  : calculatedTier === 4
                  ? "#d32ce6"
                  : calculatedTier === 5
                  ? "#eb4b4b"
                  : "gold",
            }}
          >
            <path
              d="M5.44 2.13A2.6 2.6 0 0 1 7.99 0h1.86a.6.6 0 0 1 .6.7L4.83 31.5a.6.6 0 0 1-.6.5h-2.3c-1 0-1.76-.9-1.58-1.89l5.1-27.98ZM11.82.99c.1-.57.6-.99 1.18-.99h2.93a.6.6 0 0 1 .59.7l-5.4 30.31c-.1.57-.6.99-1.18.99H7a.6.6 0 0 1-.59-.7L11.82.98Z"
              fill="currentColor"
            />
          </svg>
          <div
            className={cn(
              "border border-transparent rounded-[0.09375em] skew-x-[-10deg] flex items-center justify-center pl-[0.0833333333em] font-bold font-sans text-center whitespace-nowrap",
              size === "sm" && "ml-[-0.125em] h-[0.85em]",
              size === "md" && "ml-[-0.25em] h-[1em]",
              size === "lg" && "ml-[-0.375em] h-[1.2em]"
            )}
            style={{
              minWidth: `${dynamicWidth}em`,

              textRendering: "optimizeLegibility",
              backgroundColor:
                calculatedTier === 0
                  ? "#2c2f37"
                  : calculatedTier === 1
                  ? "#061c36"
                  : calculatedTier === 2
                  ? "#060e37"
                  : calculatedTier === 3
                  ? "#180638"
                  : calculatedTier === 4
                  ? "#320638"
                  : calculatedTier === 5
                  ? "#380606"
                  : "#383006",
              borderColor:
                calculatedTier === 0
                  ? "#b1c4d999"
                  : calculatedTier === 1
                  ? "#5e98d999"
                  : calculatedTier === 2
                  ? "#4c6aff99"
                  : calculatedTier === 3
                  ? "#8847ff99"
                  : calculatedTier === 4
                  ? "#d32ce699"
                  : calculatedTier === 5
                  ? "#eb4b4b99"
                  : "#ffd70099",
              color:
                calculatedTier === 0
                  ? "#eef2f7"
                  : calculatedTier === 1
                  ? "#8bc1ff"
                  : calculatedTier === 2
                  ? "#8a9dfe"
                  : calculatedTier === 3
                  ? "#b48bff"
                  : calculatedTier === 4
                  ? "#f177ff"
                  : calculatedTier === 5
                  ? "#ff8686"
                  : "#ffdf35",
            }}
          >
            <div
              className={cn(
                "flex items-center skew-x-[10deg]",
                size === "sm" && "h-[0.5em] leading-[0.25em]",
                size === "md" && "h-[0.5416666667em] leading-[0.2708333333em]",
                size === "lg" && "h-[0.7em] leading-[0.35em]"
              )}
            >
              <span
                className={cn(
                  size === "sm" && "text-[0.5em] leading-none px-[0.2em]",
                  size === "md" &&
                    "text-[0.5416666667em] leading-none px-[0.25em]",
                  size === "lg" && "text-[0.7em] leading-none px-[0.3em]"
                )}
              >
                {ratingParts.large}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
PremierBadge.displayName = "PremierBadge";

export { PremierBadge, premierBadgeVariants };
