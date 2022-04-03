import { OrganItem } from 'store'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    MARROW = 'marrow',
    CORNEA = 'cornea'
}

const organCatalogueList: Omit<OrganItem, 'liked' | 'inBag'>[] = [
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 32, origin: 'Michigan' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 52, origin: 'Wisconson' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 18, origin: 'California'  },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 29, origin: 'Rhode Island' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 23, origin: 'New Mexico' },
    { organType: Organ.KIDNEY, name: 'Type O Kidney', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 34, origin: 'Pennsylvania' },
    { organType: Organ.LIVER, name: 'Type O Liver', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 48, origin: 'New Hampshire' },
    { organType: Organ.LIVER, name: 'Type O Liver', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 36, origin: 'Texas' },
    { organType: Organ.LIVER, name: 'Type O Liver', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 22, origin: 'Vermont' },
    { organType: Organ.MARROW, name: 'HLA-A Bone Marrow', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 35, origin: 'Idaho' },
    { organType: Organ.CORNEA, name: 'Cornea', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 19, origin: 'Alabama' },
    { organType: Organ.CORNEA, name: 'Cornea', price: 2000, amount: '104g', stock: 3, procedureDate: '05/06/22', vendorAge: 30, origin: 'Indiana' },
]

const organCatalogue = new Map<number, OrganItem>(
    organCatalogueList.map((organItem, idx) => [idx, {...organItem, liked: false, inBag: false }])
)

export default organCatalogue
