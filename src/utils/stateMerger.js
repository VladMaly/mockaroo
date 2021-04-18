import { useState } from "react"
// import { useRef, useEffect, useState } from "react"

// export const sortAlpha = (a, b) => {
//     const nameA=a.toLowerCase(), nameB=b.toLowerCase();
//     if (nameA < nameB) //sort string ascending
//         return -1;
//     if (nameA > nameB)
//         return 1;
//     return 0; //default return value (no sorting)
// }

// export const usePrevious = (value) => {
//     const ref = useRef()
//     useEffect(() => {
//         ref.current = value
//     })
//     return ref.current
// }

export const useMergeState = (initial = {}) => {
    const [state, set] = useState(initial)
    return {
        state,
        setState: (updater) => {
            set((prev) => (typeof updater === "function" ? { ...prev, ...updater(prev) } : { ...prev, ...updater }))
            return state;
        },
    }
}
