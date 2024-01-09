import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'

const Loading = () => {
  return (
    <main>
        <div className='grid grid-cols-3 gap-8'>
            {Array.from({ length: 9 }).map(i => (
                <SkeletonCard key={i as React.Key} />
            ))}
        </div>
    </main>
  )
}

export default Loading