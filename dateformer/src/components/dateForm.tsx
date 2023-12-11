import React from 'react';
import moment from 'moment';
import { VideoProps } from '../types/types'

const DateTime = ({ date }: Pick<VideoProps, 'date'>) => <p className='date'>{date}</p>;

// HOC для улучшения стиля
const withPrettier = (WrappedComponent: React.ComponentType<{ date: string }>) => (
  (props: { date: string }) => {
    // Добавьте свою логику для улучшения стиля здесь
    console.log(props)

    return <WrappedComponent {...props} />;
  }
);

// Создайте новый компонент с улучшенным стилем
export const PrettyDateTime = withPrettier(DateTime);

