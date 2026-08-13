import Image from "next/image";

type LogoProps = {
  showText?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
};

export default function Logo({
  showText = true,
  size = "medium",
  className = "",
}: LogoProps) {
  const sizes = {
    small: {
      image: 34,
      text: "text-base",
    },
    medium: {
      image: 42,
      text: "text-xl",
    },
    large: {
      image: 58,
      text: "text-2xl",
    },
  };

  const current = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/flowforge-logo.png"
        alt="FlowForge"
        width={current.image}
        height={current.image}
        className="rounded-full object-cover"
        priority
      />

      {showText && (
        <span
          className={`${current.text} font-bold tracking-tight text-gray-950`}
        >
          FlowForge
        </span>
      )}
    </div>
  );
}