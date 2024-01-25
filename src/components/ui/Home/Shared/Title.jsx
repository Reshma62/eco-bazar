const Title = ({ subtilte, title }) => {
  return (
    <div className="text-center">
      <p className="text-sm font-medium text-primary uppercase">{subtilte}</p>
      <h2 className="font-semibold text-text-color text-[36px] ">{title}</h2>
    </div>
  );
};

export default Title;
