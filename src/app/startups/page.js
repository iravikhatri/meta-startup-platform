import StartupCard from '@/components/StartupCard'

import data from './data'

const Startup = () => {
    return (
        <div className="container mx-auto py-4">
            {data?.map(item => (
                <StartupCard key={item.id} data={item} />
            ))}
            {data?.map(item => (
                <StartupCard key={item.id} data={item} />
            ))}
        </div>
    )
}


export default Startup
