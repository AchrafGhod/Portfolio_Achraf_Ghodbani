import ReadMoreButton from "./ReadMoreButton";

const ContentSection = ({ sections, isExpanded, onToggle }) => (
  <div className="flex flex-col justify-start md:justify-center gap-3 md:gap-5 order-1 md:order-2 col-span-1 md:col-span-2">
    <div className="space-y-2 md:space-y-4">
      {sections.slice(0, isExpanded ? sections.length : 2).map((section, index) => (
        <p
          key={index}
          className="text-sm md:text-base lg:text-lg text-white-50/85 leading-relaxed md:leading-relaxed font-light"
        >
          {section}
        </p>
      ))}
    </div>

    <ReadMoreButton isExpanded={isExpanded} onToggle={onToggle} />
  </div>
);

export default ContentSection;
