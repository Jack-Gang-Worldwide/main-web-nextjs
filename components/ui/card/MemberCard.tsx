interface props {
  src: string;
  alt?: string;
  nickname: string;
  fullName: string;
}

const MemberCard = ({ src, alt, nickname, fullName }: props) => {
  return (
    <div className="flex flex-col items-center flex-wrap w-[15rem]">
      <img
        src={src}
        alt={alt ? alt : ""}
        className="object-cover w-[13.5rem] h-[13.5rem]"
      />
      <p className="font-bold text-lg">{nickname}</p>
      <p className="text-center w-[13.5rem]">{fullName}</p>
    </div>
  );
};

export default MemberCard;
