import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const steamLevelVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-full border-2 border-white text-center cursor-default mt-0.5 text-white relative",
  {
    variants: {
      levelVariant: {
        0: "border-[#9b9b9b]",
        10: "border-[#c02942]",
        20: "border-[#d95b43]",
        30: "border-[#fecc23]",
        40: "border-[#467a3c]",
        50: "border-[#4e8ddb]",
        60: "border-[#7652c9]",
        70: "border-[#c252c9]",
        80: "border-[#542437]",
        90: "border-[#997c52]",
        100: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        200: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        300: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        400: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        500: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        600: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        700: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        800: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        900: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1000: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1100: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1200: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1300: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1400: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1500: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1600: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1700: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1800: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        1900: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2000: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2100: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2200: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2300: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2400: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2500: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2600: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2700: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2800: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        2900: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3000: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3100: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3200: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3300: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3400: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3500: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3600: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3700: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3800: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        3900: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4000: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4100: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4200: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4300: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4400: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4500: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4600: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4700: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4800: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        4900: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5000: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5100: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5200: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5300: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5400: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5500: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5600: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5700: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5800: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        5900: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        6000: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
        6100: "border-none rounded-none bg-no-repeat bg-left-top leading-none text-shadow-[1px_1px_#1a1a1a] inline-flex items-center justify-center",
      },
      size: {
        sm: "h-6 w-6 text-[10px]",
        md: "h-8 w-8 text-sm",
        lg: "h-12 w-12 text-lg",
      },
    },
    defaultVariants: {
      levelVariant: 0,
      size: "md",
    },
  }
);

const getSteamLevelClass = (level: number) => {
  if (level >= 6100) {
    return 6100;
  }

  if (level >= 100) {
    const baseLevel = Math.floor(level / 100) * 100;
    return baseLevel;
  }

  for (let i = 90; i >= 10; i -= 10) {
    if (level >= i) {
      return i;
    }
  }

  return 0;
};

const getBackgroundImage = (level: number) => {
  const levelMap: { [key: number]: string } = {
    100: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_hexagons.png",
    200: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_shields.png",
    300: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_books.png",
    400: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_chevrons.png",
    500: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_circle2.png",
    600: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_angle.png",
    700: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_flag.png",
    800: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_wings.png",
    900: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_arrows.png",
    1000: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_crystals.png",
    1100: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_space.png",
    1200: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_waterelement.png",
    1300: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_fireelement.png",
    1400: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_earthelement.png",
    1500: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_airelement_1-2.png",
    1600: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_airelement_3-4.png",
    1700: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_airelement_5-6.png",
    1800: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_airelement_7-8.png",
    1900: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_airelement_9-10.png",
    2000: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_geo_1-2.png?v=2",
    2100: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_geo_3-4.png?v=2",
    2200: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_geo_5-6.png?v=2",
    2300: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_geo_7-8.png?v=2",
    2400: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_geo_9-10.png?v=2",
    2500: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_mandala_1-2.png?v=2",
    2600: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_mandala_3-4.png?v=2",
    2700: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_mandala_5-6.png?v=2",
    2800: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_mandala_7-8.png?v=2",
    2900: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_mandala_9-10.png?v=2",
    3000: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_spiro_1-2.png?v=2",
    3100: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_spiro_3-4.png?v=2",
    3200: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_spiro_5-6.png?v=2",
    3300: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_spiro_7-8.png?v=2",
    3400: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_spiro_9-10.png?v=2",
    3500: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_patterns_1-2.png?v=2",
    3600: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_patterns_3-4.png?v=2",
    3700: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_patterns_5-6.png?v=2",
    3800: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_patterns_7-8.png?v=2",
    3900: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_patterns_9-10.png?v=2",
    4000: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_shapes_1.png?v=2",
    4100: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_shapes_2.png?v=2",
    4200: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_shapes_3.png?v=2",
    4300: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_shapes_4.png?v=2",
    4400: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_shapes_5.png?v=2",
    4500: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_grunge_1.png?v=2",
    4600: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_grunge_2.png?v=2",
    4700: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_grunge_3.png?v=2",
    4800: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_grunge_4.png?v=2",
    4900: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_grunge_5.png?v=2",
    5000: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_halftone_1.png?v=2",
    5100: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_halftone_2.png?v=2",
    5200: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_halftone_3.png?v=2",
    5300: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_5300_dashes.png",
    5400: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_5400_crosshatch.png",
    5500: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_5500_spiral.png",
    5600: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_5600_leaves.png",
    5700: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_5700_mountain.png",
    5800: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_5800_rain.png",
    5900: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_5900_tornado.png",
    6000: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_6000_snowflake.png",
    6100: "https://community.fastly.steamstatic.com/public/shared/images/community/levels_6100_crown.png",
  };

  return levelMap[level] || "";
};

const getBackgroundPosition = (level: number, size: "sm" | "md" | "lg") => {
  if (level < 100) return "0 0";

  const remainder = level % 100;
  const plus = Math.floor(remainder / 10) * 10;

  const sizeMultipliers = {
    sm: 0.75,
    md: 1,
    lg: 1.5,
  };

  const multiplier = sizeMultipliers[size];
  const baseOffset = 32 * multiplier;

  if (plus === 0) return "0 0";
  if (plus === 10) return `0 -${baseOffset}px`;
  if (plus === 20) return `0 -${baseOffset * 2}px`;
  if (plus === 30) return `0 -${baseOffset * 3}px`;
  if (plus === 40) return `0 -${baseOffset * 4}px`;
  if (plus === 50) return `0 -${baseOffset * 5}px`;
  if (plus === 60) return `0 -${baseOffset * 6}px`;
  if (plus === 70) return `0 -${baseOffset * 7}px`;
  if (plus === 80) return `0 -${baseOffset * 8}px`;
  if (plus === 90) return `0 -${baseOffset * 9}px`;

  return "0 0";
};

export interface SteamLevelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof steamLevelVariants> {
  level: number;
  size?: "sm" | "md" | "lg";
}

const SteamLevel = React.forwardRef<HTMLDivElement, SteamLevelProps>(
  ({ className, level, size = "md", ...props }, ref) => {
    const levelClass = getSteamLevelClass(level);
    const backgroundImage = getBackgroundImage(levelClass);
    const backgroundPosition = getBackgroundPosition(level, size);

    const getBackgroundSize = (size: "sm" | "md" | "lg") => {
      const sizeMultipliers = {
        sm: 24,
        md: 32,
        lg: 48,
      };
      return `${sizeMultipliers[size]}px auto`;
    };

    return (
      <div
        className={cn(
          steamLevelVariants({
            levelVariant: levelClass as any,
            size,
            className,
          })
        )}
        ref={ref}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundPosition: backgroundPosition,
          backgroundSize: getBackgroundSize(size),
        }}
        {...props}
      >
        <span className="leading-none">{level}</span>
      </div>
    );
  }
);
SteamLevel.displayName = "SteamLevel";

export { SteamLevel, steamLevelVariants };
