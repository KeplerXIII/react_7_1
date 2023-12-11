import React from 'react'
import moment from 'moment'
import { VideoProps } from '../types/types'

function formatTimeDifference(targetDate: moment.Moment) {
  const now = moment()
  const diff = moment.duration(now.diff(targetDate))

  if (diff.asMinutes() < 60) {
    return `${Math.floor(diff.asMinutes())} минут назад`
  } else if (diff.asHours() < 24) {
    return `${Math.floor(diff.asHours())} часов назад`
  } else {
    return `${Math.floor(diff.asDays())} дней назад`
  }
}

const DateTime = ({ date }: Pick<VideoProps, 'date'>) => (
  <p className='date'>{date}</p>
)

const withPrettier = (
  WrappedComponent: React.ComponentType<{ date: string }>
) => (props: { date: string }) => {
  const targetDate = moment(props.date, 'YYYY-MM-DD HH:mm:ss')
  const formedTime = formatTimeDifference(targetDate)

  return <WrappedComponent {...props} date={formedTime} />
}

export const PrettyDateTime = withPrettier(DateTime)
