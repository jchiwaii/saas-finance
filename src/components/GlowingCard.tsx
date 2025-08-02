"use client";

import { Card, CardContent } from "@/components/ui/card";

const GlowingCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string;
  className?: string;
}) => {
  return (
    <Card
      className={`bg-[#0f0f0f] text-white shadow-xl transform scale-95 hover:scale-100 transition duration-300 ${className}`}
    >
      <CardContent className="p-4">
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold mt-2">{value}</h3>
      </CardContent>
    </Card>
  );
};

export default GlowingCard;
