import { Plus , Layers , FileUp , WandSparkles} from 'lucide-react';

const Versions = () => {
  return (
    <div className="px-4">
      {/* header section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Resume Versions</h1>
          <p className="text-xs font-light">Every iteration of your resume, in one place. Track algorithmic ATS uplift, side-by-side diffs, and AI enhancements.</p>
        </div>
        <div>
          <button className="bg-special px-4 py-2 flex items-center justify-center gap-2"><Plus/>Upload New Version</button>
        </div>
      </div>

      {/* cards section */}
      <div className='grid grid-cols-3 gap-10 mt-4'>
        {/* 1st card */}
        <div>
          <div className='flex items-center justify-between'>
            <div className='p-3 rounded-lg bg-purple-500/40'><Layers className='text-purple' size={15}/></div>
            <div className='text-purple font-bold text-xs'>INDEXED</div>
          </div>

          <div className='pt-4'>
            <h1 className='font-semibold text-primary text-4xl'>10 <span className='text-secondary font-light text-xs'>versions</span></h1>
            <h2 className='font-semibold text-primary'>Total Versions</h2>
            <p className='text-xs font-light'>Across 4 resumes · 100% indexed & parsed</p>
          </div>
        </div>

        {/* 2nd card */}
        <div>
          <div className='flex items-center justify-between'>
            <div className='p-3 rounded-lg bg-blue-500/40'><FileUp className='text-blue-500' size={15}/></div>
            <div className='text-blue-500 font-bold text-xs'>BASELINES</div>
          </div>

          <div className='pt-4'>
            <h1 className='font-semibold text-primary text-4xl'>5 <span className='text-secondary font-light text-xs'>raw files</span></h1>
            <h2 className='font-semibold text-primary'>Uploads</h2>
            <p className='text-xs font-light'>Original baseline resumes uploaded as PDF/DOCX</p>
          </div>
        </div>
        {/* 3rd card */}

        <div>
          <div className='flex items-center justify-between'>
            <div className='p-3 rounded-lg bg-purple-500/40'><WandSparkles className='text-special' size={15}/></div>
            <div className='text-special font-bold text-xs'>AI ENHANCED</div>
          </div>

          <div className='pt-4'>
            <h1 className='font-semibold text-primary text-4xl'>10 <span className='text-secondary font-light text-xs'>versions</span></h1>
            <h2 className='font-semibold text-primary'>AI Rewrites</h2>
            <p className='text-xs font-light'>Tailored for ATS match rate and specific roles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Versions