import React from 'react'

function MainCard({ data }) {
    const randomNumber = Math.floor(Math.random() * (20 - 17)) + 16;
    return (
        <div className="w-full mb-2 flex _shadow rounded hover:bg-blue-100">
            <div className="w-32 h-32 mx-4 my-4 border">
                <img className="w-32 h-32 p-2 max-w-none object-contain" src={data.image} alt={data.name} />
            </div>
            <div className="w-full pr-4 py-3 flex flex-col justify-between">
                <div className="flex justify-between">
                    <div className="w-full">
                        <h3 className="text-xl text-blue-500 font-bold leading-snug">
                            {data.name} <span className="font-normal text-gray-600"> - {data.summary}</span>
                        </h3>
                        <p className="text-gray-500">{data.description.split(' ').slice(0, randomNumber).join(' ')}...</p>
                    </div>
                </div>

                <div className="w-full">
                    <div className="w-full flex leading-snug mb-1">
                        <div className="flex justify-center items-center font-bold text-gray-600 mr-12">
                            <svg className="mr-1" height="18" width="18" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12 0c-4.962 0-9 4.066-9 9.065 0 7.103 8.154 14.437 8.501 14.745.143.127.321.19.499.19s.356-.063.499-.189c.347-.309 8.501-7.643 8.501-14.746 0-4.999-4.038-9.065-9-9.065zm0 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                            </svg>
                            <span>Location: {data.user.location}</span>
                        </div>
                        <div className="flex justify-center items-center font-medium text-gray-600 mr-12">
                            <svg className="mr-1" height="16" width="16" viewBox="0 0 511.999 511.999" xmlns="http://www.w3.org/2000/svg">
                                <path d="M438.09,273.32h-39.596c4.036,11.05,6.241,22.975,6.241,35.404v149.65c0,5.182-0.902,10.156-2.543,14.782h65.461c24.453,0,44.346-19.894,44.346-44.346v-81.581C512,306.476,478.844,273.32,438.09,273.32z" />
                                <path d="M107.265,308.725c0-12.43,2.205-24.354,6.241-35.404H73.91c-40.754,0-73.91,33.156-73.91,73.91v81.581c0,24.452,19.893,44.346,44.346,44.346h65.462c-1.641-4.628-2.543-9.601-2.543-14.783V308.725z" />
                                <path d="M301.261,234.815h-90.522c-40.754,0-73.91,33.156-73.91,73.91v149.65c0,8.163,6.618,14.782,14.782,14.782h208.778c8.164,0,14.782-6.618,14.782-14.782v-149.65C375.171,267.971,342.015,234.815,301.261,234.815z" />
                                <path d="M256,38.84c-49.012,0-88.886,39.874-88.886,88.887c0,33.245,18.349,62.28,45.447,77.524c12.853,7.23,27.671,11.362,43.439,11.362c15.768,0,30.586-4.132,43.439-11.362c27.099-15.244,45.447-44.28,45.447-77.524C344.886,78.715,305.012,38.84,256,38.84z" />
                                <path d="M99.918,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,36.655,29.82,66.475,66.475,66.475c9.298,0,18.152-1.926,26.195-5.388c13.906-5.987,25.372-16.585,32.467-29.86c4.98-9.317,7.813-19.946,7.813-31.227C166.393,151.51,136.573,121.689,99.918,121.689z" />
                                <path d="M412.082,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,11.282,2.833,21.911,7.813,31.227c7.095,13.276,18.561,23.874,32.467,29.86c8.043,3.462,16.897,5.388,26.195,5.388c36.655,0,66.475-29.82,66.475-66.475C478.557,151.509,448.737,121.689,412.082,121.689z" />
                            </svg>
                            <span>Team: {data.team}</span>
                        </div>
                        <div className="flex justify-center items-center font-medium text-gray-600 mr-12">
                            <svg className="mr-1" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.253 16.253">
                                <path fill="#030104" d="M9.235,16.253H6.994c-0.568,0-1.031-0.463-1.031-1.031V3.831c0-0.568,0.462-1.03,1.031-1.03h2.241c0.568,0,1.03,0.462,1.03,1.03v11.391C10.265,15.79,9.803,16.253,9.235,16.253z M7.463,14.753h1.302V4.301H7.463V14.753z" />
                                <path fill="#030104" d="M3.985,16.253H1.744c-0.568,0-1.031-0.463-1.031-1.031V8.331c0-0.568,0.462-1.03,1.031-1.03h2.241c0.568,0,1.03,0.462,1.03,1.03v6.891C5.015,15.79,4.553,16.253,3.985,16.253z M2.213,14.753h1.302V8.801H2.213V14.753z" />
                                <path fill="#030104" d="M14.51,16.253h-2.24c-0.568,0-1.03-0.463-1.03-1.031V1.03c0-0.568,0.462-1.03,1.03-1.03h2.24c0.567,0,1.029,0.462,1.029,1.03v14.192C15.54,15.79,15.078,16.253,14.51,16.253z M12.74,14.753h1.3V1.5h-1.3V14.753z" />
                            </svg>
                            <span>Stage: {data.stage}</span>
                        </div>
                        <div className="flex justify-center items-center font-medium text-gray-600 mr-3">
                            <svg className="mr-1" height="18" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" style={{ marginBottom: '2px' }}>
                                <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z" />
                            </svg>
                            <span>Industry: {data.industry.join(', ')}</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-md text-gray-900 font-medium">
                            Looking for <span className="font-bold text-blue-500"> - Co-Founder</span>
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainCard
