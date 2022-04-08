import create from 'zustand'
import organCatalogue from './catalogue'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    MARROW = 'marrow',
    CORNEA = 'cornea'
}

export type OrganItem = {
    id: string,
    organType: Organ,
    name: string,
    price: number,
    amount: string,
    procedureDate: string,
    vendorAge: number,
    bloodType?: string,
    liked: boolean,
    inBag: boolean,
}

export enum AquireMethod {
    DELIVERY = 'delivery',
    PICKUP = 'pick up'
}

type StoreType = {
    menuOpen: boolean,
    toggleMenu: () => void,
    hideMenu: () => void,
    showHeader: boolean,
    showFooter: boolean,
    useHeader: (show?: boolean) => void,
    useFooter: (show?: boolean) => void,
    showSearch: boolean,
    toggleSearch: (show: boolean) => void,
    catalogue: Map<number, OrganItem>,
    updateCatalogue: (itemId: number, update: Partial<OrganItem>) => void,
    clearCatalogue: () => void,
    aquireMethod: AquireMethod,
    updateAquireMethod: (medtho: AquireMethod) => void
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
    showSearch: false,
    toggleSearch: (show: boolean) => set(state => ({ showSearch: show })),
    catalogue: organCatalogue,
    updateCatalogue: (itemId, update) => set(state => {
        const newMap = new Map(state.catalogue.entries())
        const item = newMap.get(itemId)
        if (item) {
            newMap.set(itemId, { ...item, ...update })
        }
        return ({ catalogue: newMap })
    }),
    clearCatalogue: () => set(state => ({ catalogue: organCatalogue })),
    aquireMethod: AquireMethod.DELIVERY,
    updateAquireMethod: (method: AquireMethod) => set(state => ({ aquireMethod: method }))
}))

export default useStore
