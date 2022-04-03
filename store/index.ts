import create from 'zustand'
import organCatalogue from './catalogue'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    MARROW = 'marrow',
    CORNEA = 'cornea'
}

export type OrganItem = {
    organType: Organ,
    name: string,
    price: number,
    amount: string,
    stock: number,
    procedureDate: string,
    origin: string,
    vendorAge: number,
    liked: boolean,
    inBag: boolean,
}

type StoreType = {
    menuOpen: boolean,
    toggleMenu: () => void,
    hideMenu: () => void,
    showHeader: boolean,
    showFooter: boolean,
    useHeader: (show?: boolean) => void,
    useFooter: (show?: boolean) => void,
    catalogue: Map<number, OrganItem>,
    updateCatalogue: (itemId: number, update: Partial<OrganItem>) => void,
    clearCatalogue: () => void
}
const useStore = create<StoreType>(set => ({
    menuOpen: false,
    toggleMenu: () => set(
        state => ({ menuOpen: !state.menuOpen, showFooter: !state.menuOpen && state.showFooter })
    ),
    hideMenu: () => set(state => ({ menuOpen: false })),
    showHeader: false,
    showFooter: false,
    useHeader: (show?: boolean) => set(
        state => ({ showHeader: show===true || show===undefined })
    ),
    useFooter: (show?: boolean) => set(
        state => ({ showFooter: show===true || show===undefined })
    ),
    catalogue: organCatalogue,
    updateCatalogue: (itemId, update) => set(state => {
        const newMap = new Map(state.catalogue.entries())
        const item = newMap.get(itemId)
        if (item) {
            newMap.set(itemId, { ...item, ...update })
        }
        return ({ catalogue: newMap })
    }),
    clearCatalogue: () => set(state => ({ catalogue: organCatalogue }))
}))

export default useStore
