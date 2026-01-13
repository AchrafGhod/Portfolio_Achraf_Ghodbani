const Badge = ({ text }) => (
  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-50/10 border border-blue-50/30 text-xs md:text-sm text-blue-50 font-medium">
    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-50"></span>
    {text}
  </div>
);

export default Badge;
