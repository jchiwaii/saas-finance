"use client";

export const InfoCard = ({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail?: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
    <p className="text-slate-400 text-sm mb-2">{title}</p>
    <p className="text-white text-3xl font-bold">{value}</p>
    {detail && <p className="text-slate-500 text-xs mt-2">{detail}</p>}
  </div>
);
