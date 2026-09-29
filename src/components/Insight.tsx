import { Gauge , CircleStar , Layers , TriangleAlert , RotateCcwKey , CircleMinus} from 'lucide-react';
import { ChartLineLabelCustom } from './Chart_component';

const Insight = () => {
  return (
    <div className="px-6 py-4">
      <div>
        <div className="flex items-center justify-start gap-2">
          <p className="text-sm font-bold text-purple">Analytics Engine</p>
          <p className="text-xs font-light text-secondary">
            ⏺ Continuous Profile Telemetry
          </p>
        </div>
        <h1 className="text-2xl font-bold text-primary">Insights</h1>
        <p className="text-xs font-light text-secondary">
          Diagnostic patterns, metric anomalies, and keyword resonance across
          your submitted resumes.
        </p>
      </div>

      {/* cards */}

      <div className="grid grid-cols-3 gap-3 mt-4">
        {/* card 01 */}
        <div className="px-3 py-2 border border-purple-500 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-xs font-light text-secondary">
              Average ATS Score
            </p>
            <div className="p-2 rounded-lg bg-purple-300">
              <Gauge className="w-4 h-4 text-purple" />
            </div>
          </div>

          <div>
            <h1 className="text-secondary font-light text-sm">
              <span className="font-bold text-special text-3xl">79</span>/100
            </h1>
          </div>

          <div>
            <p className="text-xs font-light text-secondary">
              Medium benchmark
            </p>
          </div>
        </div>

        {/* card 02 */}

        <div className="px-3 py-2 border border-purple-500 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-xs font-light text-secondary">Best Score</p>
            <div className="p-2 rounded-lg bg-purple-300">
              <CircleStar className="w-4 h-4 text-purple" />
            </div>
          </div>
          <div>
            <h1 className="text-secondary font-light text-sm">
              <span className="font-bold text-special text-3xl">85</span>%
            </h1>
          </div>
          <div>
            <p className="text-xs font-light text-secondary">
              Senior Frontend Engineer
            </p>
          </div>
        </div>

        {/* card 03 */}

        <div className="px-3 py-2 border border-purple-500 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-xs font-light text-secondary">Total Analyses</p>
            <div className="p-2 rounded-lg bg-purple-300">
              <Layers className="w-4 h-4 text-purple" />
            </div>
          </div>
          <div>
            <h1 className="text-secondary font-light text-sm">
              <span className="font-bold text-special text-3xl">10</span>Total
              Analyses
            </h1>
          </div>
          <div>
            <p className="text-xs font-light text-secondary">
              Across 4 active resumes
            </p>
          </div>
        </div>
      </div>

      {/* chart */}

      <div className="w-full h-full px-3 py-2">
        <ChartLineLabelCustom
          title="Score Trend"
          description="ATS algorithmic performance evaluated across sequential resume releases"
          footerHeader="10 analyses tracked"
          footerDescription="ATS Index"
        />
      </div>

      {/* details */}
      <div className="flex items-center justify-start">
        {/* first div */}
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
                <p className='text-xs font-light text-secondary'>Deficiencies identified repeatedly across your parsed versions</p>
              </div>
              <div>
                <p className="text-red-600 font-medium text-xs">3 Critical</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row gap-3">
            {/* details card */}
            <div className='flex items-center justify-between mt-2'>
              <div >
                <div className="flex items-center justify-start gap-2">
                  <p className='text-sm font-medium text-primary flex items-center justify-center gap-2'><span className='text-red-500'>⬤</span>Management bullets read generic</p>
                  <div className='bg-red-400/40 px-4 py-1 text-xs capitalize text-red-500 rounded-lg'>HIGH</div>
                </div>
                <p className='text-xs font-light text-secondary'>Appears in 6 analyses across 3 resumes</p>
              </div>
              
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="flex-1 px-3 py-1">
          <div className='flex items-center justify-between'>
            <div>
              <div className='flex items-center justify-start gap-2'>
                <RotateCcwKey className='w-5 h-5 text-purple' />
                <p className='text-lg text-secondary font-bold'>Most-Missed Keywords</p>
              </div>
              <p className='font-light text-xs text-secondary'>Hard skills expected by target Job Descriptions</p>
            </div>
            <div>
              <p className='text-xs font-light text-secondary'>Target: Tech Lead</p>
            </div>
          </div>

          {/* tags section */}
          <div className="mt-4 flex flex-wrap gap-2">
            {/* resusabe tag cards */}
            <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
              <CircleMinus className='text-red-500' size={15}/>
              <p className='text-xs font-light text-secondary'>TypeScript <span className='text-blue-500 font-light'>+7</span></p>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
              <CircleMinus className='text-red-500' size={15}/>
              <p className='text-xs font-light text-secondary'>TypeScript <span className='text-blue-500 font-light'>+7</span></p>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
              <CircleMinus className='text-red-500' size={15}/>
              <p className='text-xs font-light text-secondary'>TypeScript <span className='text-blue-500 font-light'>+7</span></p>
            </div>

            <div className="flex items-center justify-start gap-2 mt-2 px-3 py-1 border border-red-500 rounded-lg">
              <CircleMinus className='text-red-500' size={15}/>
              <p className='text-xs font-light text-secondary'>TypeScript <span className='text-blue-500 font-light'>+7</span></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insight