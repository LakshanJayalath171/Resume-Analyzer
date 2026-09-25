import { CirclePlus , BadgeCheck, Brain , Save} from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  timestamp: string;
}

const Activity_card = ({title,description,timestamp}: ActivityCardProps) => {
  return (
    <div className="flex items-center justify-between p-1 mt-3">
      <div className="flex items-center justify-start">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
          <CirclePlus className="text-blue-500" size={20} />
        </div>

        <div>
            <h1 className='text-primary font-bold text-md'>{title}</h1>
            <p className='text-secondary font-light text-xs'>{description}</p>
        </div>
      </div>

      <div>
        <p className='text-secondary font-light text-xs'>{timestamp}</p>
      </div>
    </div>
  );
}

export default Activity_card