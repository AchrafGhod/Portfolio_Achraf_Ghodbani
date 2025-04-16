const Button = ({ text, className, id, href }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        if (href && !id) {
          // Open the link in a new tab if href is provided and id is not
          window.open(href, "_blank", "noopener,noreferrer");
          return;
        }

        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
