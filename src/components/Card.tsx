import { formatDistanceToNow } from 'date-fns'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { Post } from '../types'

interface CardProps {
  data: Post,
  onDelete?: (id: number) => void
  onEdit?: (data: Post) => void
}

export default function Card({ data, onDelete, onEdit }: CardProps) {
  const username = localStorage.getItem('username');
  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-gray-primary overflow-hidden pb-6">
      <div className='bg-primary h-[70px] text-white w-full flex justify-between items-center px-6'>
        <h2 className='text-lg md:text-[22px] font-bold'>{data.title}</h2>
        {data.username === username &&
          <div className='flex gap-6'>
            <button className='cursor-pointer' onClick={() => onDelete?.(data.id)}>
              <RiDeleteBin2Fill size={30} />
            </button>
            <button className='cursor-pointer' onClick={() => onEdit?.(data)}>
              <BiEdit size={30} />
            </button>
          </div>
        }
      </div>
      <div className='text-gray-primary w-full flex justify-between items-center px-6'>
        <p className='text-base md:text-lg font-bold'>@{data?.username}</p>
        <p className='text-base'>{formatDistanceToNow(new Date(data.created_datetime), { addSuffix: true })}</p>
      </div>
      <p className='text-base md:text-lg text-black px-6'>
        {data.content}
      </p>
    </article>
  )
}
