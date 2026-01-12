import { LinkedInEmbed } from "react-social-media-embed";

const LinkedInCard = ({ icon, title, desc, type, link }) => {
  return (
    <div className="card-border rounded-xl padding-responsive-card flex flex-col gap-responsive min-h-responsive-card">
      <div className="grid grid-cols-[1fr_auto] items-center gap-responsive">
        <h3 className="text-white text-responsive-title font-semibold">{title}</h3>
        {icon.startsWith('/') ? (
          <img src={icon} alt={title} className="size-responsive" />
        ) : (
          <span className="text-white text-responsive-title">{icon}</span>
        )}
      </div>

      <p className="text-white-50 text-responsive-desc flex-grow line-clamp-2">{desc}</p>

      {type === 'post' && (
        <>
          <LinkedInEmbed url={link} width="100%" />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline mt-responsive-link text-responsive-link"
          >
            Voir sur LinkedIn
          </a>
        </>
      )}
      {type === 'link' && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline mt-responsive-link text-responsive-link"
        >
          Explorer
        </a>
      )}
    </div>
  );
};

export default LinkedInCard;