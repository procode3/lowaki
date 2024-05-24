import { type RefObject, useState, useEffect } from 'react'

interface Props {
    cursor: { x: number, y: number },
    cardRef: RefObject<HTMLElement>,
    mouseOnCard: boolean
}


const Flame = () => {
    

    return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 5 5"
				className="w-full h-full duration-200 transition-all"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					className="fill-orange-600"
					stroke='red'
					strokeWidth={0.5}
					d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					className="fill-orange-600"
					stroke="red"
					strokeWidth={0.15}
					d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
				/>
			</svg>
		);
}

export default Flame