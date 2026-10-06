import {
  ArrowDown,
  ArrowRight,
  CircleCheck,
  CircleMinus,
  RotateCcwKey,
  TriangleAlert,
  Verified,
} from "lucide-react";
import { useState } from "react";
import { Progress, ProgressLabel, ProgressValue } from "./ui/progress";
import CircularProgress from "./Circular_progress";

const Analyze_done = () => {
  const [fullDetails, setFullDetails] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center pt-6 ">
        <div className="">
          <div className="">
            <div className=" rounded-lg w-full h-full flex items-center justify-center ">
              <div className="p-4 rounded-lg bg-green-200">
                <CircleCheck size={32} className="text-green-600" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-sm font-medium text-green-600">
                Evaluation Succeeded
              </h2>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center mt-4 ">
            <div className="text-center mt-2 max-w-96 flex items-center justify-center flex-col gap-2">
              <h1 className="text-2xl font-bold text-primary">
                Analysis complete
              </h1>
              <p className="text-xs font-light">
                Your resume analysis is ready. We audited Alex_Chen_Resume.pdf
                against contemporary applicant tracking platforms.
              </p>
            </div>
          </div>

          {fullDetails ? (
            <div className="w-full h-full mt-4">
              <div className="flex items-center justify-start">

                {/* basic details */}
                <div className="flex-1 flex items-center justify-start px-4 py-1">
                  <div>
                    <div>
                    <h1 className="text-primary font-bold text-lg">Basic Information</h1>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-start gap-2">
                      <div className="text-sm font-light bg-green-400 text-white p-4  rounded-full">
                        A
                      </div>

                      <div>
                        <h2 className="font-bold text-primary">Lakshan Jayalath</h2>
                        <p className="text-sm font-light text-secondary text-xs">Software Engineer</p>
                      </div>
                    </div>

                    <div >
                      {/* technical skills */}
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        <h2 className="text-primary font-bold">Technical Skills</h2>•
                        <p className="text-secondary font-light text-sm">5 Found</p>
                      </div>

                      {/* soft skills */}
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        <h2 className="text-primary font-bold">Soft Skills</h2>•
                        <p className="text-secondary font-light text-sm">3 Found</p>
                      </div>

                      {/* experience */}
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        <h2 className="text-primary font-bold">Experience</h2>•
                        <p className="text-secondary font-light text-sm">5 Years</p>
                      </div>

                      {/* projects */}
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        <h2 className="text-primary font-bold">Projects</h2>•
                        <p className="text-secondary font-light text-sm">3 Found</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

                {/* ATS Score */}
                <div className="flex-1 px-4 py-1">
                  <div className="flex-3 flex items-start justify-start">
                    <div className="px-3 py-1">
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start mt-3">
                {/* recent analysis */}
                <div className="flex-1">
                  <div className="flex-1 px-3 py-1">
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center justify-start gap-2">
                            <TriangleAlert className="w-5 h-5 text-red-600" />
                            <p className="text-lg text-secondary font-bold">
                              Most Recent Analysis
                            </p>
                          </div>
                          <p className="text-xs font-light text-secondary">
                            Deficiencies identified repeatedly across your
                            parsed versions
                          </p>
                        </div>
                        <div>
                          <p className="text-red-600 font-medium text-xs">
                            3 Critical
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-3">
                      {/* details card */}
                      <div className="flex items-center justify-between mt-2">
                        <div>
                          <div className="flex items-center justify-start gap-2">
                            <p className="text-sm font-medium text-primary flex items-center justify-center gap-2">
                              <span className="text-red-500">⬤</span>Management
                              bullets read generic
                            </p>
                            <div className="bg-red-400/40 px-4 py-1 text-xs capitalize text-red-500 rounded-lg">
                              HIGH
                            </div>
                          </div>
                          <p className="text-xs font-light text-secondary">
                            Appears in 6 analyses across 3 resumes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* missing keywords */}
                <div className="flex-1">
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center justify-start gap-2">
                          <RotateCcwKey className="w-5 h-5 text-purple" />
                          <p className="text-lg text-secondary font-bold">
                            Most-Missed Keywords
                          </p>
                        </div>
                        <p className="font-light text-xs text-secondary">
                          Hard skills expected by target Job Descriptions
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-light text-secondary">
                          Target: Tech Lead
                        </p>
                      </div>
                    </div>
                    {/* resusabe tag cards */}
                    <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
                      <CircleMinus className="text-red-500" size={15} />
                      <p className="text-xs font-light text-secondary">
                        TypeScript{" "}
                        <span className="text-blue-500 font-light">+7</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
                      <CircleMinus className="text-red-500" size={15} />
                      <p className="text-xs font-light text-secondary">
                        TypeScript{" "}
                        <span className="text-blue-500 font-light">+7</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
                      <CircleMinus className="text-red-500" size={15} />
                      <p className="text-xs font-light text-secondary">
                        TypeScript{" "}
                        <span className="text-blue-500 font-light">+7</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
                      <CircleMinus className="text-red-500" size={15} />
                      <p className="text-xs font-light text-secondary">
                        TypeScript{" "}
                        <span className="text-blue-500 font-light">+7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5 mt-3">
              <div className="px-3 py-1 felx flex-row gap-3">
                <p className="text-xs font-bold text-primary">OVERALL SCORE</p>
                <h1 className="text-3xl font-bold text-purple">
                  89
                  <span className="text-sm font-light text-secondary">
                    /100
                  </span>
                </h1>
                <p className="text-xs font-light text-primary">
                  Strong position
                </p>
              </div>

              <div className="px-3 py-1 felx flex-row gap-3">
                <p className="text-xs font-bold text-primary">ATS PARSING</p>
                <h1 className="text-3xl font-bold text-special">96%</h1>
                <p className="text-xs font-light text-primary">
                  0 layout blockers
                </p>
              </div>

              <div className="px-3 py-1 felx flex-row gap-3">
                <p className="text-xs font-bold text-primary">OPPORTUNITIES</p>
                <h1 className="text-3xl font-bold text-blue-600">
                  7
                  <span className="text-sm font-light text-secondary">
                    findings
                  </span>
                </h1>
                <p className="text-xs font-light text-primary">4 high impact</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center mt-4">
            <button
              onClick={() => setFullDetails(!fullDetails)}
              className="px-4 py-2 rounded-lg bg-special flex items-center justify-center gap-2 "
            >
              View Full Analysis <ArrowDown className="text-blue-50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze_done;
