import { OrganItem } from 'store'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    MARROW = 'marrow',
    CORNEA = 'cornea'
}

const organCatalogueList: Omit<OrganItem, 'liked' | 'inBag'>[] = [
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.LIVER, name: 'Type O Liver', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.LIVER, name: 'Type O Liver', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.LIVER, name: 'Type O Liver', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.MARROW, name: 'HLA-A Bone Marrow', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.CORNEA, name: 'Cornea', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
    { organType: Organ.CORNEA, name: 'Cornea', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', description: 'a kidney like a bean' },
]

const organCatalogue = new Map<number, OrganItem>(
    organCatalogueList.map((organItem, idx) => [idx, {...organItem, liked: false, inBag: false }])
)

export default organCatalogue
