interface Props {
  imgURL: string;
  title: string;
  amount?: number | string;
}

const StatsCards = ({ imgURL, title, amount}: Props) => {
  return (
    <div className="py-2 m-3 flex flex-col gap-1">
      <div className="flex gap-2">
        <img src={imgURL} alt={`${title}-img`} />
        <h2 className="text-[16px] leading-[18px] sm:text-[20px] sm:leading-[22px] text-slate-500">
          {title}
        </h2>
      </div>
      <h2 className="text-[16px] leading-[24px] mt-2 sm:text-[18px] sm:leading-[20px] text-slate-700">
        {amount}
      </h2>
    </div>
  );
};

export default StatsCards;
