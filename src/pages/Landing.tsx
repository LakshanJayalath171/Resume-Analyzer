import Navbar from "../components/Navbar"
import { WandSparkles ,Check , Plus} from 'lucide-react';

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"


const Landing = () => {
  return (
    <div>
      <Navbar />

      {/* hero section */}
      <div className="flex items-center justify-center text-center p-10">
        <div>
          {/* hero text */}
          <div className="flex items-center justify-center gap-2">
            <div className="bg-gray-500/30 px-3 py-1 rounded-full">
              <p className="text-secondary font-light">
                ✨AI-Powered Resume Analysis
              </p>
            </div>
          </div>
          <div className="text-6xl text-primary font-bold my-6">
            See your resume through an
            <br /> <span className="text-special text-7xl">AI lens.</span>
          </div>

          <div>
            <p className="text-secondary font-light">
              Analyze, improve, and optimize your resume with AI-powered
              insights.
            </p>
          </div>

          {/* analyze button */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-special text-white rounded-full">
              <WandSparkles size={20} />
              Analyze My Resume
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-3 cursor-pointer btn-primary text-white rounded-lg">
              See How It Works
            </button>
          </div>

          {/* hero image */}
          <div className="flex items-center justify-center mt-10">
            <img src="/images/hero image.png" alt="Description of the image" />
          </div>

          {/* fetures section */}

          <div className="flex items-center justify-center gap-10">
            <div className="flex items-center justify-center gap-2">
              <img className="w-8 h-8" src="/icons/ai_analyze.png" />
              <p className="font-light text-secondary">AI Resume Analysis</p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <img className="w-8 h-8" src="/icons/ats-optimization.png" />
              <p className="font-light text-secondary">ATS Optimization</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img className="w-8 h-8" src="/icons/smart_insight.png" />
              <p className="font-light text-secondary">Smart Insights</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img className="w-8 h-8" src="/icons/ai_rewrite.png" />
              <p className="font-light text-secondary">AI-Powered Rewrites</p>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}

      <div className="grid grid-cols-2 px-10 gap-3">
        {/* first card */}
        <div className="px-6 py-3 rounded-2xl bg-gray-600/20">
          <div>
            <img src="/icons/ats_score.png" className="w-12 h-12" />
          </div>

          <div className="mt-2">
            <h1 className="text-purple font-bold">ATS Score</h1>
            <p className="font-light text-secondary">
              Analyze your resume with a clear 0–100 ATS score.
            </p>

            <div className="flex flex-col mt-3 gap-2">
              <div>
                <Progress value={56} className="w-full max-w-sm">
                  <ProgressLabel>Format & Parsing</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </div>

              <div>
                <Progress value={81} className="w-full max-w-sm ">
                  <ProgressLabel>Keywords & Skills</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </div>

              <div>
                <Progress value={70} className="w-full max-w-sm">
                  <ProgressLabel>Structural Impact</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </div>
            </div>
          </div>
        </div>

        {/* second card */}
        <div className="px-6 py-3 rounded-2xl bg-gray-600/20">
          <div>
            <img src="/icons/ai_insight.png" className="w-12 h-12" />
          </div>

          <div className="mt-2">
            <h1 className="text-purple font-bold">AI Insights</h1>
            <p className="font-light text-secondary">
              Identify strengths, weaknesses, formatting issues, and clarity
              problems.
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <p className="">Passive Voice Detected</p>
            </div>

            <div className="flex items-center justify-center px-3 py-1 bg-orange-400/50">
              <p className="text-xs font-light">CLARITY ALERT</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="">Standard Font Hierarchy</p>
            </div>

            <div className="flex items-center justify-center px-3 py-1 bg-green-400/50">
              <p className="text-xs font-light">FORMATTING CHECK: PASSED</p>
            </div>
          </div>
        </div>

        {/* third card */}

        <div className=" px-6 py-3 rounded-2xl bg-gray-600/20">
          <div>
            <img src="/icons/keyword.png" className="w-16 h-12" />
          </div>

          <div className="mt-2">
            <h1 className="text-purple font-bold">Keyword Gaps</h1>
            <p className="font-light text-secondary">
              Discover important keywords missing from your resume.
            </p>
          </div>

          <div className="mt-6">
            <p className="font-light text-secondary capitalize">
              Detected vs. Target Match
            </p>

            <div className="grid grid-cols-3 mt-2 gap-1">
              <div className="bg-green-500/20 border-dashed border-2 border-green-400 px-4 py-1 rounded-full flex items-center gap-2 text-green-800">
                <Check size={12} className="text-green-800" />
                Kubernetes
              </div>

              <div className="bg-green-500/20 border-dashed border-2 border-green-400 px-4 py-1 rounded-full flex items-center gap-2 text-green-800">
                <Check size={12} className="text-green-800" />
                GraphQL
              </div>

              <div className="bg-red-500/20 border-dashed border-2 border-red-400 px-4 py-1 rounded-full flex items-center gap-2 text-red-800">
                <Plus size={12} className="text-red-800" />
                System Architecture
              </div>

              <div className="bg-red-500/20 border-dashed border-2 border-red-400 px-4 py-1 rounded-full flex items-center gap-2 text-red-800">
                <Plus size={12} className="text-red-800" />
                CI/CD
              </div>
            </div>
          </div>
        </div>

        {/* fourth card */}

        <div className="px-6 py-3 rounded-2xl bg-gray-600/20">
          <div>
            <img
              src="../../public/icons/ai_rewrites.png"
              className="w-12 h-12"
            />
          </div>

          <div>
            <h1 className="text-purple font-bold">AI Rewrites</h1>
            <p className="font-light text-secondary">
              Improve weak resume bullet points with AI-powered suggestions.
            </p>
          </div>

          <div className="mt-6 items-center gap-2">
            <div className="px-3 py-1 rounded-lg border-l-4 border-dotted border-red-500">
              <p className="text-lg text-red-500 font-bold">BEFORE</p>
              <p className="text-sm font-light text-secondary">
                "Responsible for managing website updates."
              </p>
            </div>

            <div className="px-3 py-1 rounded-lg border-l-4 border-dotted border-red-500 mt-2">
              <p className="text-lg text-green-500 font-bold">
                After (AI Optimized)
              </p>
              <p className="text-sm font-light text-secondary">
                "Spearheaded redesign of web platform, boosting visitor
                conversion by 34%."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* imrove section */}
      <div className="flex items-center justify-center text-center p-10 mt-10">
        <div>
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Improve your resume in three steps.
            </h1>
            <p className="text-sm font-light text-secondary">
              Fast, automated, and built for modern hiring standards.
            </p>
          </div>

          <div className="grid grid-cols-3 justify-center gap-6">
            {/* first card */}
            <div className="py-3 mt-4">
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-200 text-special rounded-full text-lg font-bold">
                  01
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center p-3 rounded-full bg-gray-500/50 mt-2">
                  <img
                    src="/icons/upload.png"
                    className="w-12 h-12"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-primary">UPLOAD</h2>
                <p className="text-sm font-light text-secondary">
                  Upload your resume as a PDF.
                </p>
              </div>
            </div>

            {/* second card */}
            <div className="py-3 mt-4">
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-200 text-special rounded-full text-lg font-bold">
                  02
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center p-3 rounded-full bg-gray-500/50 mt-2">
                  <img
                    src="/icons/analyze.png"
                    className="w-12 h-12"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-primary">ANALYZE</h2>
                <p className="text-sm font-light text-secondary">
                  ResumeLens analyzes your resume with AI.
                </p>
              </div>
            </div>

            {/* third card */}

            <div className="py-3 mt-4">
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-200 text-special rounded-full text-lg font-bold">
                  03
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center p-3 rounded-full bg-gray-500/50 mt-2">
                  <img
                    src="/icons/improve.png"
                    className="w-12 h-12"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-primary">Improve</h2>
                <p className="text-sm font-light text-secondary">
                  Get actionable insights, keyword recommendations, and AI rewrites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex items-center justify-center px-4 py-2">
        <div>
          <div>
            <h1 className="text-3xl font-bold text-primary">Make your resume work harder.</h1>
            <p className="text-sm font-light text-secondary">
              Get clear, AI-powered insights and improve your resume with confidence.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button className="px-4 py-2 bg-special font-bold font-white">Analyze My Resume</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-10 mt-10">
        <div>
          <h1 className="text-lg font-bold text-primary">ResumeLens</h1>
          <p className="text-sm font-light text-secondary">See your resume through an AI lens.</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-sm font-light text-secondary hover:text-primary">
            Features
          </a>

          <a href="#" className="text-sm font-light text-secondary hover:text-primary">
            How It Works
          </a>

          <a href="#" className="text-sm font-light text-secondary hover:text-primary">
            Pricing
          </a>

          <a href="#" className="text-sm font-light text-secondary hover:text-primary">
            Sign In
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center py-6">
        <div>
          <p className="text-sm font-light text-secondary">© 2026 ResumeLens. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Landing