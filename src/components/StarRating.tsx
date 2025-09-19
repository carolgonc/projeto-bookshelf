import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number | undefined;
  className?: string;
}

export function StarRating({ rating = 0, className }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
