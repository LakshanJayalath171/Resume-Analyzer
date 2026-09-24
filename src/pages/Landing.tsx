import Navbar from "../components/Navbar"
import { WandSparkles } from 'lucide-react';
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
                <img className="w-8 h-8" src="/icons/ai_analyze.png"/>
                <p className="font-light text-secondary">AI Resume Analysis</p>
            </div>

            <div className="flex items-center justify-center gap-2">
                <img className="w-8 h-8" src="/icons/ats-optimization.png"/>
                <p className="font-light text-secondary">ATS Optimization</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <img className="w-8 h-8" src="/icons/smart_insight.png"/>
                <p className="font-light text-secondary">Smart Insights</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <img className="w-8 h-8" src="/icons/ai_rewrite.png"/>
                <p className="font-light text-secondary">AI-Powered Rewrites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing