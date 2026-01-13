import Badge from "./Badge";

const CardTitleSection = ({ headline, badges, subtitle }) => (
  <div className="px-5 md:px-8 lg:px-12 pt-5 md:pt-8 lg:pt-12 pb-2 md:pb-4 lg:pb-6 border-b border-white-50/10">
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 md:gap-4">
      <div className="space-y-2 md:space-y-3 flex-1">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-white tracking-tight">
          {headline}
        </h1>
        
        <div className="flex flex-wrap gap-2 md:gap-3 items-center">
          {badges.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>

        <div className="w-12 h-1.5 bg-linear-to-r from-blue-50 via-blue-50/40 to-transparent rounded-full" />
      </div>

      <div className="flex items-center lg:pt-2">
        <p className="text-sm md:text-lg lg:text-xl text-white-50/70 font-light italic whitespace-nowrap">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

export default CardTitleSection;
