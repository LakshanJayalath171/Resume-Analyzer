import { FileUp , Verified, WandSparkles} from 'lucide-react';
import { ChartLineLabelCustom } from './Chart_component';
import CircularProgress from './Circular_progress';

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"


const Dashbord_comp = () => {
  return (
    <div className="w-full h-full px-4 py-2 flex flex-col gap-4">
      {/* heading section */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 ">
            <h1 className="text-primary font-semibold text-lg">Hello, Alex.</h1>
            <div className="text-blue-600 bg-blue-600/40 px-4 py-1 rounded-full text-xs">
              Synchronized
            </div>
          </div>
          <p className="text-xs font-light">
            Sharper resumes with clear, focused AI insights.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button className="bg-special px-4 py-3 rounded-full text-white text-sm flex items-center justify-center gap-3">
            <FileUp />
            Upload Resume
          </button>
          <button className="px-4 py-3 btn-secondary flex items-center justify-center gap-3">
            <WandSparkles /> Analyze Resume
          </button>
        </div>
      </div>

      {/* cards */}

      <div className="grid grid-cols-4 gap-3">
        {/* first card */}
        <div className="btn-secondary px-3 py-1">
          <div className="flex items-center justify-between">
            <h1 className="text-primary font-bold text-lg capitalize">
              ATS Score
            </h1>
            <p className="text-purple font-light text-sm">+8%</p>
          </div>

          <div className="py-3">
            <h1 className="text-2xl font-bold text-primary">
              85<span className="text-secondary font-light text-sm">/100</span>
            </h1>
          </div>
          <div>
            <p className="text-xs font-light text-secondary">Top 4% of peers</p>
          </div>
        </div>

        {/* second card */}
        <div className="btn-secondary px-3 py-1">
          <div className="flex items-center justify-between">
            <h1 className="text-primary font-bold text-lg capitalize">
              Resume Versions
            </h1>
            <p className="text-purple font-light text-sm">+8%</p>
          </div>

          <div className="py-3">
            <h1 className="text-2xl font-bold text-primary">8</h1>
          </div>
          <div>
            <p className="text-xs font-light text-secondary">
              2 created this month
            </p>
          </div>
        </div>

        {/* third card */}

        <div className="btn-secondary px-3 py-1">
          <div className="flex items-center justify-between">
            <h1 className="text-primary font-bold text-lg capitalize">
              Issues Identified
            </h1>
            <p className="text-purple font-light text-sm">+8%</p>
          </div>
          <div className="py-3">
            <h1 className="text-2xl font-bold text-primary">
              5
              <span className="text-secondary font-light text-sm">Pending</span>
            </h1>
          </div>
          <div>
            <p className="text-xs font-light text-secondary">
              3 improved since V3
            </p>
          </div>
        </div>

        {/* fourth card */}

        <div className="btn-secondary px-3 py-1">
          <div className="flex items-center justify-between">
            <h1 className="text-primary font-bold text-lg capitalize">
              Keywords Matched
            </h1>
            <p className="text-purple font-light text-sm">+8%</p>
          </div>
          <div className="py-3">
            <h1 className="text-2xl font-bold text-primary">
              15<span className="text-secondary font-light text-sm">/17</span>
            </h1>
          </div>
          <div>
            <p className="text-xs font-light text-secondary">
              2 missing keywords
            </p>
          </div>
        </div>
      </div>

      {/* charts and progress section */}
      <div className="flex items-center justify-center gap-3">
        {/* line chart */}
        <div className="flex-4">
          <ChartLineLabelCustom
            title="Score Evolution"
            description="Your ATS score across analyzed resume iterations"
            footerHeader="Target benchmark: 85+ for Tier-1 Companies"
            footerDescription="Standard Met"
          />
        </div>

        {/* progress */}
        <div className="flex-3">
          <div className=" px-3 py-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-primary font-bold text-lg capitalize">
                  ATS Readiness
                </h1>
                <p className="text-xs font-light text-secondary">
                  System pass rate for enterprise HR parsers
                </p>
              </div>

              <div>
                <Verified className="text-green-600" size={20} />
              </div>
            </div>
            <div className="py-3 flex items-center justify-center gap-3">
              <div>
                <CircularProgress value={75} />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 px-4 py-2">
                {/* first progress */}
                <div>
                  <Progress value={56} className="w-full max-w-sm">
                    <ProgressLabel>Formatting & Structure</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                </div>

                {/* second progress */}
                <div>
                  <Progress value={80} className="w-full max-w-sm">
                    <ProgressLabel>Keyword Density</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                </div>

                {/* third progress */}
                <div>
                  <Progress value={90} className="w-full max-w-sm">
                    <ProgressLabel>Action Verbs & Impact</ProgressLabel>
                    <ProgressValue />
                  </Progress>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord_comp