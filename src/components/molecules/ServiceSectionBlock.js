
function ServiceSectionBlock({icon, title, text}) {
  return (
    <div className="block">
      <div class="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="main">
        <h6>
          {title}
        </h6>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default ServiceSectionBlock;
