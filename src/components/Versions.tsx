import {
  Plus,
  Layers,
  FileUp,
  WandSparkles,
  Eye,
  FileDown,
  EllipsisVertical,
  ChevronRight,
} from "lucide-react";

export const Flat_cards = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-4 mt-2">
        <div className="p-3 rounded-lg bg-purple-500/40">
          <WandSparkles className="text-purple" size={15} />
        </div>
        <div>
          <div className="flex items-center justify-start gap-2">
            <div className="text-sm font-light bg-blue-500/40 text-blue-500 px-2 py-1 rounded-lg">
              V4
            </div>
            <h1 className="text-lg font-semibold text-primary">
              Senior Frontend Engineer Resume
            </h1>
            <div className="text-special text-xs font-light bg-purple-500/40 rounded-lg px-2 py-1">
              Rewrite
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <p className="text-xs font-light text-secondary">
              Rewritten · 2 hours ago
            </p>
            <p className="text-xs font-light text-purple">
              Tailored for Tech Lead
            </p>
            <p className="text-xs font-light text-secondary">2.4 MB · PDF</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="px-4 py-1 text-xs font-light text-green-500 bg-green-500/40 flex items-center justify-center gap-2 rounded-lg">
          <div className="bg-green-500 rounded-full w-1 h-1"></div>
          <p className="text-sm font-bold text-primary">
            86 <span className="text-secondary font-light  text-xs">ATS</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
          <EllipsisVertical className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
          <FileDown className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
          <ChevronRight className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
        </div>
      </div>
    </div>
  );
};

const Versions = () => {
  return (
    <div className="px-4">
      {/* header section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Resume Versions</h1>
          <p className="text-xs font-light">
            Every iteration of your resume, in one place. Track algorithmic ATS
            uplift, side-by-side diffs, and AI enhancements.
          </p>
        </div>
        <div>
          <button className="bg-special px-4 py-2 flex items-center justify-center gap-2">
            <Plus />
            Upload New Version
          </button>
        </div>
      </div>

      {/* cards section */}
      <div className="grid grid-cols-3 gap-10 mt-8">
        {/* 1st card */}
        <div>
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-lg bg-purple-500/40">
              <Layers className="text-purple" size={15} />
            </div>
            <div className="text-purple font-bold text-xs">INDEXED</div>
          </div>

          <div className="pt-4">
            <h1 className="font-semibold text-primary text-4xl">
              10{" "}
              <span className="text-secondary font-light text-xs">
                versions
              </span>
            </h1>
            <h2 className="font-semibold text-primary">Total Versions</h2>
            <p className="text-xs font-light">
              Across 4 resumes · 100% indexed & parsed
            </p>
          </div>
        </div>

        {/* 2nd card */}
        <div>
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-lg bg-blue-500/40">
              <FileUp className="text-blue-500" size={15} />
            </div>
            <div className="text-blue-500 font-bold text-xs">BASELINES</div>
          </div>

          <div className="pt-4">
            <h1 className="font-semibold text-primary text-4xl">
              5{" "}
              <span className="text-secondary font-light text-xs">
                raw files
              </span>
            </h1>
            <h2 className="font-semibold text-primary">Uploads</h2>
            <p className="text-xs font-light">
              Original baseline resumes uploaded as PDF/DOCX
            </p>
          </div>
        </div>
        {/* 3rd card */}

        <div>
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-lg bg-purple-500/40">
              <WandSparkles className="text-special" size={15} />
            </div>
            <div className="text-special font-bold text-xs">AI ENHANCED</div>
          </div>

          <div className="pt-4">
            <h1 className="font-semibold text-primary text-4xl">
              10{" "}
              <span className="text-secondary font-light text-xs">
                versions
              </span>
            </h1>
            <h2 className="font-semibold text-primary">AI Rewrites</h2>
            <p className="text-xs font-light">
              Tailored for ATS match rate and specific roles
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center justify-start gap-2">
            <button className="btn-primary px-3 py-1 rounded-lg cursor-pointer text-sm">
              All Versions <span>(10)</span>
            </button>

            <button className="btn-primary px-3 py-1 rounded-lg cursor-pointer text-sm">
              Uploads<span>(5)</span>
            </button>
            <button className="btn-primary px-3 py-1 rounded-lg cursor-pointer text-sm">
              AI Rewrites <span>(5)</span>
            </button>
          </div>
          <div>
            <div className="flex items-center justify-start gap-3">
              <input
                type="text"
                placeholder="Search versions"
                className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <select className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>All</option>
                <option>Uploads</option>
                <option>AI Rewrites</option>
              </select>
            </div>
          </div>
        </div>

        {/* cards section */}
        <div className="mt-4">
          <Flat_cards />
        </div>
      </div>
    </div>
  );
};

export default Versions;
