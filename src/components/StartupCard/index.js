import React from 'react'


import TeamIcon from '@/icons/TeamIcon';
import StarIcon from '@/icons/StarIcon';
import StageIcon from '@/icons/StageIcon';
import LocationIcon from '@/icons/LocationIcon';


function StartupCard({ data }) {
    return (
        <div className="w-4/5 mb-3 shadow border rounded hover:bg-blue-100">
            <div className="flex">
                <div className="w-24 h-24 mx-4 my-4 border">
                    <img className="w-24 h-24 p-2 max-w-none object-contain" src={data.image} alt={data.name} />
                </div>
                <div>
                    <div className="w-full mb-6 pr-4 py-3 flex flex-col justify-between">
                        <h3 className="text-2xl text-blue-500 font-bold leading-snug">
                            {data.name} <span className="text-sm text-gray-500"> - {data.summary}</span>
                        </h3>
                        <h4 className="text-md text-gray-900 font-bold leading-snug">
                            Looking for <span className="text-blue-500 font-bold"> - Co-Founder</span>
                        </h4>
                        <p className="mt-2 text-gray-500 leading-snug">{data.description}</p>
                    </div>
                    <div className="w-full pb-3 mb-1 grid grid-cols-2 gap-y-1 leading-snug">
                        <div className="flex items-center font-bold text-gray-600">
                            <LocationIcon height="18" width="18" className="mr-1" />
                            <span>Location: {data.user.location}</span>
                        </div>
                        <div className="flex items-center font-medium text-gray-600">
                            <TeamIcon height="16" width="16" className="mr-1" />
                            <span>Team: {data.team}</span>
                        </div>
                        <div className="flex items-center font-medium text-gray-600">
                            <StageIcon height="16" width="16" className="mr-1" />
                            <span>Stage: {data.stage}</span>
                        </div>
                        <div className="flex items-center font-medium text-gray-600">
                            <StarIcon height="18" width="18" className="mr-1"  />
                            <span>Industry: {data.industry.join(', ')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupCard
