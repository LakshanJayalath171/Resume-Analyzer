import {  ArrowRight, CircleCheck } from "lucide-react"

const Analyze_done = () => {
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
                        <h2 className="text-sm font-medium text-green-600">Evaluation Succeeded</h2>
                    </div>
                </div>

                <div className="text-center mt-2 max-w-96">
                    <h1 className="text-2xl font-bold text-primary">Analysis complete</h1>
                    <p className="text-xs font-light">Your resume analysis is ready. We audited Alex_Chen_Resume.pdf against contemporary applicant tracking platforms.</p>
                </div>

                <div className="grid grid-cols-3 gap-5 mt-3">
                    <div className="px-3 py-1 felx flex-row gap-3">
                        <p className="text-xs font-bold text-primary">OVERALL SCORE</p>
                        <h1 className="text-3xl font-bold text-purple">89<span className="text-sm font-light text-secondary">/100</span></h1>
                        <p className="text-xs font-light text-primary">Strong position</p>
                    </div>

                    <div className="px-3 py-1 felx flex-row gap-3">
                        <p className="text-xs font-bold text-primary">ATS PARSING</p>
                        <h1 className="text-3xl font-bold text-special">96%</h1>
                        <p className="text-xs font-light text-primary">0 layout blockers</p>
                    </div>

                    <div className="px-3 py-1 felx flex-row gap-3">
                        <p className="text-xs font-bold text-primary">OPPORTUNITIES</p>
                        <h1 className="text-3xl font-bold text-blue-600">7<span className="text-sm font-light text-secondary">findings</span></h1>
                        <p className="text-xs font-light text-primary">4 high impact</p>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button className="px-4 py-2 rounded-lg bg-special flex items-center justify-center gap-2 ">  View Full Analysis <ArrowRight className="text-blue-50"/></button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Analyze_done