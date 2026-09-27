import { Lottie } from "lottie-react";
import analyzingAnimation from "../assets/Animation/search imm.json";
import { CircleCheck , Hourglass ,  Sparkles} from 'lucide-react';

const Analyzing = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        {/* analyze animation */}
        <div className="flex min-h-64 w-full items-center justify-center">
          <Lottie
            src={analyzingAnimation}
            autoplay
            loop
            className="h-64 w-full max-w-md"
          />
        </div>

        {/* down division */}
        <div className="flex items-center justify-center w-full h-full">
          {/* header section */}
          <div className="w-96">
            <div className="flex items-center justify-center gap-2">
                <div className="text-center px-4 py-1 rounded-full text-xs bg-purple-600/30 text-purple-900">
              Analyzing In Progress
            </div>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-primary">Analyzing your resume</h1>
                <p className="text-secondary font-light text-sm">ResumeLens is deconstructing document hierarchies, running semantic vector comparisons, and compiling remediation notes.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full h-full">

            {/* card */}
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-start gap-2">
                    <CircleCheck size={16} className="text-green-600" />
                    <div>
                        <p className="text-primary font-semibold text-md">Formatting Analysis Complete</p>
                        <p className="text-secondary font-light text-xs">Extracted 420 words across 5 sections</p>
                    </div>
                </div>
                <div>
                    <p className="text-green-600 font-light text-sm">Done</p>
                </div>
            </div>

            {/*  */}
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-start gap-2">
                    <CircleCheck size={16} className="text-green-600" />
                    <div>
                        <p className="text-primary font-semibold text-md">Checking ATS compatibility & format</p>
                        <p className="text-secondary font-light text-xs">Validated 0 layout roadblocks</p>
                    </div>
                </div>
                <div>
                    <p className="text-green-600 font-light text-sm">Done</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-start gap-2">
                    <Hourglass size={16} className="text-blue-600" />
                    <div>
                        <p className="text-primary font-semibold text-md">Finding keyword gaps</p>
                        <p className="text-secondary font-light text-xs">Scanning against tech stack vectors...</p>
                    </div>
                </div>
                <div>
                    <p className="text-blue-600 font-light text-sm">In Progress</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-start gap-2">
                    <Sparkles size={16} className="text-amber-600" />
                    <div>
                        <p className="text-primary font-semibold text-md">Generating actionable recommendations</p>
                        <p className="text-secondary font-light text-xs">Bullet point rewrites & quantification metrics</p>
                    </div>
                </div>
                <div>
                    <p className="text-amber-600 font-light text-sm">Queued</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzing;
