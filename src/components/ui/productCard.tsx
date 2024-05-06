"use client"
import React, { useRef, useState } from 'react'
import { CircleStackIcon, CheckIcon } from '@heroicons/react/24/outline'
import Flame from '@/components/utils/Flame';
import Pot from '@/components/utils/Pot';

export default function ProductCard() {
    const cardsRef = useRef<HTMLElement>(null)
    const [cursor, setCursor] = useState({ x: 0, y: 0 })
    const [mouseOnCard, setMouseOnCard] = useState(false)
    const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (cardsRef.current !== null) {
            const rect = cardsRef.current.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            setCursor({ x, y })
        }
    }
    return (
        <section className="card" ref={cardsRef} onMouseEnter={() => setMouseOnCard(true)} onMouseLeave={() => setMouseOnCard(false)} onMouseMove={event => handleMouseMove(event)}>
            <div className="flex flex-col w-2/5 justify-between">
                <div className="flex flex-col gap-5">
                    <CircleStackIcon className='w-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner ' />
                    <h1 className='font-poppins text-neutral-200 tracking-wide text-2xl'>
                        Cooking Solutions
                    </h1>
                    <p className='-mt-2 font-poppins text-neutral-500 tracking-wide'>
                        Improved cookstoves
                    </p>

                </div>
                <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
                    <span className='flex flex-row gap-2'>
                        <CheckIcon className="w-5" />
                        Gasifiers
                    </span>
                    <span className='flex flex-row gap-2'>
                        <CheckIcon className="w-5" />
                        Briquettes
                    </span>
                    <span className='flex flex-row gap-2'>
                        <CheckIcon className="w-5" />
                        E-cooking
                    </span>

                </div>
            </div>
            <div className='w-3/5 flex flex-col place-content-center'>
                <Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
            </div>
        </section>
    )
}
