import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function CircularProgress({
  percentage,
  title,
  circleWidth ,
  icon = null,
}) {
  const radius = circleWidth==125?50:85;
  const dashedArr = radius * Math.PI * 2;
  const dashOffset = dashedArr - (dashedArr * percentage) / 100;
  const rotation = -90;

  return (
    <div className={`flex flex-col justify-center items-center ${lato.className}`}>
      <div
        className="relative gap-0 flex flex-col justify-center items-center"
        style={{ width: circleWidth, height: circleWidth }}
      >
        <svg
          height={circleWidth}
          width={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          {/* Background Circle */}
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="15px"
            r={radius}
            className="fill-none stroke-gray-700"
          />

          {/* Progress Circle */}
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="15px"
            r={radius}
            className="circle-progress stroke-blue-500"
            strokeDasharray={dashedArr}
            strokeDashoffset={dashOffset}
            transform={`rotate(${rotation} ${circleWidth / 2} ${circleWidth / 2})`}
          />
        </svg>

        {/* Icon in Center */}
        <div className="absolute" style={{ width: circleWidth * 0.64, height: circleWidth * 0.64 }}>
          <div className="text-gray-700 text-8xl flex justify-center items-center h-full">
            {icon && icon}
          </div>
        </div>
      </div>

      <div className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 text-[22px] md:text-[30px] font-bold`}>
        {percentage}%
      </div>
      <h3 className={`text-[#959595] text-[18px] md:text-[24px] font-bold`}>{title}</h3>
    </div>
  );
}