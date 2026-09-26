import { useState } from 'react';
import { LockKeyhole , FileText, Verified , ArrowLeftRight , Trash} from 'lucide-react';


const Analyze = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');

  const handleFile = (file?: File) => {
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setSelectedFile(null);
      setError('Please select a PDF file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setSelectedFile(null);
      setError('The file must be smaller than 5 MB.');
      return;
    }

    setSelectedFile(file);
    setError('');
  };

  return (
    <div className='px-6 py-2'>
      {/* heading */}
      <div>
        <div className="flex items-center justify-start gap-2">
          <div className="px-4 py-1 rounded-full bg-blue-800/40 text-xs text-blue-800">Engine v2.4</div>
          <div className="px-4 py-1 rounded-full bg-green-800/40 text-xs text-green-800">Instant ATS Telemetry</div>
        </div>
        <h1 className="text-lg font-bold text-primary">Analyze your resume</h1>
        <p className="text-xs font-light text-secondary">Upload your resume and let AI deconstruct formatting, ATS compliance patterns, and industry-grade positioning in seconds.</p>
      </div>

      {/* content */}

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-md font-bold text-primary">Upload your resume</h2>
            <p className="text-xs font-light text-secondary">PDF files only · Maximum 5 MB</p>
          </div>

          <div className='flex items-center justify-start gap-3'>
            <LockKeyhole size={16} className='text-purple' />
            <p className='text-secondary font-light text-xs'>Client-side Encrypted</p>
          </div>
        </div>

        {/* uploader section */}
        <label
          htmlFor="resume-upload"
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setIsDragging(false);
            handleFile(event.dataTransfer.files[0]);
          }}
          className={`flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-purple-500 px-6 py-10 mt-6 transition-colors ${
            isDragging ? 'bg-purple-500/20' : 'bg-purple-500/5 hover:bg-purple-500/10'
          }`}
        >
          <input
            id="resume-upload"
            type="file"
            accept="application/pdf,.pdf"
            className="sr-only"
            onChange={(event) => handleFile(event.target.files?.[0])}
          />

          <div className='flex items-center justify-center flex-col text-center'>
            <div className='flex items-center justify-center w-32 h-32 bg-gray-600/40 rounded-full p-6'>
              <img src="/icons/upload.png" alt="" className='w-full h-full' />
            </div>

            <div className='flex items-center justify-center flex-col mt-4'>
              <h1>{selectedFile ? selectedFile.name : 'Upload your file'}</h1>
              <p className='text-secondary font-light text-xs'>Drag and drop your file here or click to browse</p>
              {error && <p className='mt-2 text-xs text-red-600'>{error}</p>}
            </div>
          </div>
          

        </label>
      </div>

      {/* upload details */}
      <div className='flex items-center justify-between px-4 py-2 mt-3'>

        {/* left side */}
        <div className='flex items-center justify-start gap-4'>
          <FileText size={16} className='text-purple' />
          <div>
            <div className="flex items-center justify-start gap-2">
              <p>Alex_Chen_Resume.pdf</p>
              <div className="px-4 py-1 rounded-full text-green-600 bg-green-500/40 text-xs font-light">Ready to analyze</div>
            </div>

            <div className='flex items-center justify-start gap-2 mt-1'>
              <p className='text-xs font-light text-secondary'>2 Mb</p>
              <div className='flex items-center justify-start gap-1'>
                <Verified size={16} className='text-green-600' />
                <p className='text-xs font-light text-secondary'>Text-selectable PDF</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='flex items-center justify-start gap-4'>
          <button className="px-3 py-1 rounded-lg flex items-center justify-center gap-2 cursor-pointer border-1 border-gray-500"><ArrowLeftRight size={16} className='text-purple' />Replace</button>
          <button className='px-3 py-1 rounded-lg flex items-center justify-center gap-2 cursor-pointer border-1 border-gray-500'><Trash size={16} className='text-red-600' />Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Analyze