import create from 'zustand'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    BONE = 'bone',
    CORNEA = 'cornea'
}

type StoreType = {
}
const useStore = create<StoreType>(set => ({
}))

export default useStore
