import { FC } from 'react';

interface CustomCheckboxProps {
  isChecked: boolean;
  showShadow?: boolean;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
  isChecked,
  showShadow = false,
}) => {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={`peer size-[23px] appearance-none rounded-md border-[1px] border-[#CDCDCD] transition-all
        checked:border-none
        checked:bg-[#2469F6]
        group-hover:border-[#BDBDBD] checked:group-hover:bg-[#5087F8]
        ${showShadow ? 'shadow-[0_0_0_3px_#c0c6d4]' : ''}
        `}
        checked={isChecked}
        readOnly
      />

      <svg
        className="absolute left-0 top-0 hidden size-[23px] stroke-[#E3E3E3] p-1
        group-hover:block
        peer-checked:block 
        "
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
          // stroke="white"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CustomCheckbox;
