import { type RefObject, useState, useEffect } from 'react'

interface Props {
    cursor: { x: number, y: number },
    cardRef: RefObject<HTMLElement>,
    mouseOnCard: boolean
}


const Pot = ({ cursor, cardRef, mouseOnCard }: Props) => {
    const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50" })

    useEffect(() => {
        if (cardRef.current && cursor.x !== null && cursor.y !== null) {
            const rect = cardRef.current.getBoundingClientRect()
            const x = cursor.x / rect.width * 100 - 24
            const y = cursor.y / rect.height * 100
            setGradientCenter({ cx: `${x}%`, cy: `${y}%` })
        }
    }, [cursor, cardRef])

    return (

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt" height="264.000000pt" viewBox="0 0 300.000000 264.000000"
            preserveAspectRatio="xMidYMid meet">
            <defs>
                <radialGradient
                    id="emeraldGradient"
                    gradientUnits='userSpaceOnUse'
                    r="35%"
                    cx={gradientCenter.cx}
                    cy={gradientCenter.cy}
                >
                    {mouseOnCard && <stop stopColor='#10B981' />}
                    <stop offset="1" stopColor='#404040' />
                </radialGradient>
            </defs>
            <g transform="translate(0.000000,264.000000) scale(0.100000,-0.100000)"
                fill="#ffffff" >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-emerald-500/50'
                    stroke='url(#emeraldGradient)'
                    d="M1400 2214 c-43 -39 -90 -122 -90 -159 0 -57 24 -98 109 -189 59 -63
                        90 -104 94 -125 9 -42 -13 -93 -63 -147 -43 -47 -51 -74 -21 -74 51 0 141 124
                        141 194 0 58 -34 118 -98 177 -69 62 -102 113 -102 157 0 41 11 63 63 125 36
                        43 38 50 25 64 -14 13 -20 11 -58 -23z"/>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-emerald-500/50'
                    stroke='url(#emeraldGradient)'
                    d="M1068 2191 c-40 -44 -68 -104 -68 -142 0 -52 27 -98 104 -178 98
                        -102 115 -140 91 -198 -9 -21 -31 -54 -50 -73 -38 -40 -48 -73 -23 -78 25 -5
                        84 53 112 110 49 98 28 165 -84 271 -73 69 -90 97 -90 148 0 37 12 61 61 120
                        45 54 48 69 15 69 -16 0 -39 -16 -68 -49z"/>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-emerald-500/50'
                    stroke='url(#emeraldGradient)'
                    d="M1698 2203 c-38 -39 -77 -114 -78 -147 0 -56 27 -104 108 -188 118
                        -122 124 -171 33 -274 -45 -51 -52 -74 -21 -74 28 0 95 64 119 114 43 87 18
                        171 -77 257 -70 64 -102 113 -102 160 0 35 12 57 73 133 51 63 4 79 -55 19z"/>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-gray-200/50'
                    stroke='url(#emeraldGradient)'
                    d="M2146 2148 c-9 -12 -16 -27 -16 -32 0 -21 -51 -73 -89 -91 -23 -10
                        -40 -23 -38 -29 2 -6 26 -26 54 -44 39 -26 56 -45 72 -83 28 -64 49 -64 78 0
                        15 36 33 57 65 76 74 46 75 55 16 84 -42 21 -57 36 -82 83 -17 32 -34 58 -38
                        58 -4 0 -14 -10 -22 -22z m56 -189 l-32 -33 -35 34 -35 34 32 33 32 33 35 -34
                        35 -35 -32 -32z"/>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-gray-200/50'
                    stroke='url(#emeraldGradient)'
                    d="M690 1867 c-20 -41 -36 -58 -77 -82 -29 -16 -52 -33 -53 -37 0 -4 24
                        -23 54 -42 42 -27 60 -47 81 -90 31 -63 44 -62 71 3 20 48 41 69 98 98 l49 25
                        -44 25 c-63 37 -78 52 -105 106 -13 26 -30 47 -37 47 -6 0 -23 -24 -37 -53z
                        m69 -88 c17 -17 31 -32 31 -34 0 -1 -14 -18 -30 -35 l-31 -33 -34 33 -35 34
                        32 33 c18 18 33 33 34 33 1 0 16 -14 33 -31z"/>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-emerald-500'
                    stroke='url(#emeraldGradient)'
                    d="M770 1427 c-32 -16 -70 -73 -70 -104 0 -40 30 -93 62 -109 16 -8 51
                        -18 79 -21 27 -3 49 -8 49 -11 0 -2 -23 -75 -51 -161 -57 -177 -67 -232 -49
                        -286 16 -48 72 -110 124 -138 40 -22 51 -22 496 -25 311 -2 471 0 507 8 69 15
                        122 55 157 119 25 47 28 60 23 115 -4 48 -67 265 -103 361 -5 12 3 15 32 16
                        93 1 154 53 154 131 0 30 -8 47 -34 76 l-34 37 -659 2 c-514 2 -663 0 -683
                        -10z m1322 -49 c9 -7 23 -25 32 -39 16 -26 16 -28 -10 -58 l-26 -31 -646 0
                        c-587 0 -647 2 -664 17 -33 29 -19 101 22 116 8 3 299 6 646 6 490 1 634 -2
                        646 -11z m-97 -380 c64 -209 66 -236 17 -297 -15 -20 -46 -45 -68 -56 -37 -19
                        -64 -20 -464 -23 -280 -3 -445 0 -484 7 -73 14 -122 49 -148 109 -25 55 -21
                        76 52 297 l49 150 488 5 c268 3 491 3 494 0 3 -3 32 -89 64 -192z"/>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-emerald-500'
                    stroke='url(#emeraldGradient)'
                    d="M1507 1125 c-31 -8 -72 -22 -90 -31 -90 -46 -182 -156 -206 -246 -9
                        -37 -19 -48 -66 -76 -36 -22 -55 -40 -55 -53 0 -25 25 -24 75 3 36 20 55 22
                        175 23 127 0 138 2 192 28 121 59 216 183 221 287 2 43 1 45 -34 57 -62 20
                        -149 24 -212 8z m199 -57 c15 -15 -51 -130 -102 -178 -72 -69 -129 -92 -231
                        -98 -46 -2 -83 -2 -83 1 0 2 53 35 118 71 156 89 156 89 141 114 -15 23 -1 29
                        -193 -85 -49 -29 -91 -53 -93 -53 -16 0 61 111 104 150 76 70 136 91 245 87
                        48 -2 90 -6 94 -9z m-436 -258 c0 -13 -7 -20 -19 -20 -14 0 -18 5 -14 20 3 11
                        12 20 19 20 8 0 14 -9 14 -20z"/>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='fill-neutral-100/50'
                    stroke='url(#emeraldGradient)'
                    d="M1160 445 l-115 -65 -101 0 c-78 0 -104 -3 -114 -15 -10 -12 -10 -18
                        0 -30 10 -12 37 -15 119 -15 l107 0 91 54 91 54 7 -54 c3 -30 11 -54 16 -54
                        14 0 85 37 147 76 28 19 52 33 52 31 1 -1 2 -24 4 -50 2 -27 6 -51 9 -53 9
                        -10 42 5 126 55 l81 49 0 -28 c0 -16 4 -40 10 -54 l10 -26 172 0 c158 0 174 2
                        185 19 20 31 -23 41 -177 41 l-140 0 0 54 c0 82 -11 84 -119 20 -51 -29 -95
                        -54 -97 -54 -2 0 -4 23 -4 50 0 45 -2 50 -22 50 -13 0 -60 -23 -106 -50 -46
                        -28 -86 -50 -90 -50 -4 0 -6 17 -4 38 2 20 -3 45 -10 54 -12 17 -22 13 -128
                        -47z"/>
            </g>
        </svg>
    )
}

export default Pot