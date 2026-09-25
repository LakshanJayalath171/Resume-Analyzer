import Analyze from '@/components/Analyze';
import Dashbord_comp from '@/components/Dashbord_comp';
import Insight from '@/components/Insight';
import My_resume from '@/components/My_resume';
import Sidebar_card from '@/components/Sidebar_card';
import Versions from '@/components/Versions';
import { ChartNoAxesCombined ,Grid2x2Plus, FolderOpen  ,RotateCwFadingClock , FileText, Search} from 'lucide-react';

import { useState } from 'react';

const Dashbord = () => {
    const [selectedMenu, setSelectedMenu] = useState('Dashboard');
    
  return (
    <div className="flex items-start justify-start w-screen h-screen">
        {/* sidebar */}
        <div className="flex-1 px-4 py-3">
            <div className="flex items-center gap-2">
                <img src="/icons/logo.png" alt="Logo" className="w-8 h-8" />
                <h2 className="text-primary font-bold text-lg">Resume<span className="text-special">Lense</span></h2>
            </div>

            <div className="mt-4 flex flex-col gap-1">
                <Sidebar_card selectedText={selectedMenu} icon={<Grid2x2Plus size={20}  />} text="Dashboard" setSelectedMenu={setSelectedMenu} />

                <Sidebar_card selectedText={selectedMenu} icon={<FileText size={20}  />} text="Analyze Resume" setSelectedMenu={setSelectedMenu} />

                <Sidebar_card selectedText={selectedMenu} icon={<FolderOpen size={20}  />} text="My Resume" setSelectedMenu={setSelectedMenu} />

                <Sidebar_card selectedText={selectedMenu} icon={<RotateCwFadingClock size={20} />} text="Resume Versions" setSelectedMenu={setSelectedMenu} />

                <Sidebar_card selectedText={selectedMenu} icon={<ChartNoAxesCombined size={20}  />} text="Insight" setSelectedMenu={setSelectedMenu}/>
            </div>
        </div>

        {/* content */}
        <div className="flex-4">
            {/* navbar section */}
            <div className="flex items-center justify-between px-4 py-2">
                <div>
                    <div className="flex items-center gap-2 bg-gray-400/50 px-4 py-1 rounded-full">
                        <p>✨AI Engine v2.4 Active</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-gray-400/50 px-4 py-1 rounded-full">
                    <Search />
                    <input type="text" placeholder="Search for keywords..." className="bg-transparent outline-none" />
                </div>
            </div>

            {/* content */}
            <div className='w-full h-full overflow-x-auto'>
                {selectedMenu === 'Dashboard' && <div><Dashbord_comp/></div>}
                {selectedMenu === 'Analyze Resume' && <div><Analyze/></div>}
                {selectedMenu === 'My Resume' && <div><My_resume/></div>}
                {selectedMenu === 'Resume Versions' && <div><Versions/></div>}
                {selectedMenu === 'Insight' && <div><Insight/></div>}
            </div>
        </div>
    </div>
  )
}

export default Dashbord