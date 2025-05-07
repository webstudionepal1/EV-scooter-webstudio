import search from "@/assets/images/icons/search.png";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 bg-white p-[10px] rounded-full w-68">
      <img src={search} alt="Search icon" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent focus:outline-none text-sm w-full text-poppins h-6 "
      />
    </div>
  );
};

export default SearchBar;
