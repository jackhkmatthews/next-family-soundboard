const SoundWave = ({ className }: { className?: string }) => {
  const rootStyles = [];
  if (className) rootStyles.push(className);
  return (
    <svg
      viewBox="0 0 800 160"
      className={rootStyles.join(" ")}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0 80 C 40 10, 60 10, 100 80 S 160 150, 200 80 S 260 10, 300 80 S 360 150, 400 80 S 460 10, 500 80 S 560 150, 600 80 S 660 10, 700 80 S 760 80, 800 80"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="4px"
      />
    </svg>
  );
};

export default SoundWave;
