import create from 'zustand'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    BONE = 'bone',
    CORNEA = 'cornea'
}

type StoreType = {
    menuOpen: boolean,
    toggleMenu: () => void
}
const useStore = create<StoreType>(set => ({
    menuOpen: false,
    toggleMenu: () => set(state => ({ menuOpen: !state.menuOpen }))
}))

export default useStore
