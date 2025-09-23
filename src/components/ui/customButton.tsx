import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface CosmicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "large";
}

const CosmicButton = forwardRef<HTMLButtonElement, CosmicButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative flex items-center justify-center w-52 h-12 overflow-hidden rounded-full",
          "bg-gradient-to-r from-[#161a25] to-[#161a25]",
          "border-2 border-transparent bg-clip-padding",
          "transition-all duration-500 ease-in-out",
          "hover:scale-110 active:scale-95",
          "focus:outline-none focus:ring-2 focus:ring-gray-400",
          "before:absolute before:inset-0 before:rounded-full before:p-1",
          "before:bg-gradient-to-r before:from-[#6a95fa73] before:via-[#631e29] before:via-black before:to-[#161a25]",
          "before:-z-10",
          "animate-gradient-shift",
          className
        )}
        style={{
          backgroundImage: `
            linear-gradient(#4378f5, #161a25),
            linear-gradient(137.48deg, #4378f5 10%, #631e29 45%, #000000 67%, #161a25 87%)
          `,
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          backdropFilter: "blur(1rem)",
        }}
        {...props}
      >
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden rounded-full backdrop-blur-sm transition-all duration-500 hover:z-10 hover:bg-[#161a25] stars-container">
          <div className="stars absolute w-[200rem] h-[200rem]"></div>
        </div>

        <strong className="relative z-20 font-orbitron text-s  tracking-[5px] text-white text-shadow-glow">
          {children || "SPACE"}
        </strong>

        <div className="absolute flex w-48 glow-container">
          <div className="absolute w-8 h-8 rounded-full blur-lg bg-white animate-orbit-1"></div>
          <div className="absolute w-8 h-8 rounded-full blur-lg bg-red-900/80 animate-orbit-2"></div>
        </div>
      </button>
    );
  }
);

CosmicButton.displayName = "CosmicButton";

export { CosmicButton };
