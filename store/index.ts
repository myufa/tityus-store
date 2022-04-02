import create from 'zustand'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    BONE = 'bone',
    CORNEA = 'cornea'
}

type StoreType = {
    menuOpen: boolean,
    toggleMenu: () => void,
    showHeader: boolean,
    showFooter: boolean,
    useHeader: (show?: boolean) => void,
    useFooter: (show?: boolean) => void,
}
const useStore = create<StoreType>(set => ({
    menuOpen: false,
    toggleMenu: () => set(
        state => ({ menuOpen: !state.menuOpen, showFooter: !state.menuOpen && state.showFooter })
    ),
    showHeader: false,
    showFooter: false,
    useHeader: (show?: boolean) => set(
        state => ({ showHeader: show===true || show===undefined })
    ),
    useFooter: (show?: boolean) => set(
        state => ({ showFooter: show===true || show===undefined })
    ),
}))

export default useStore
