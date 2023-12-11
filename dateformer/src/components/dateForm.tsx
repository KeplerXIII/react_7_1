import { VideoProps } from '../types/types'

export function DateTime({ date }: Pick<VideoProps, 'date'>) {
  return <p className='date'>{date}</p>
}
