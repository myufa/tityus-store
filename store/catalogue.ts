import { OrganItem } from 'store'

export enum Organ {
    KIDNEY = 'kidney',
    LIVER = 'liver',
    MARROW = 'marrow',
    CORNEA = 'cornea'
}

const organCatalogueList: Omit<OrganItem, 'liked' | 'inBag'>[] = [
    { id: 'KD249346', organType: Organ.KIDNEY, bloodType: 'O', name: 'Type O Kidney', price: 252000, amount: '189g', procedureDate: '03/15', vendorAge: 35 },
    { id: 'KD885246', organType: Organ.KIDNEY, bloodType: 'O', name: 'Type O Kidney', price: 305000, amount: '262g', procedureDate: '03/07', vendorAge: 28 },
    { id: 'KD625228', organType: Organ.KIDNEY, bloodType: 'O', name: 'Type O Kidney', price: 200000, amount: '162g', procedureDate: '03/29', vendorAge: 24  },
    { id: 'KD977987', organType: Organ.KIDNEY, bloodType: 'O', name: 'Type O Kidney', price: 295000, amount: '206g', procedureDate: '03/17', vendorAge: 31 },
    { id: 'KD737485', organType: Organ.KIDNEY, bloodType: 'O', name: 'Type O Kidney', price: 183000, amount: '273g', procedureDate: '03/08', vendorAge: 40 },
    { id: 'KD776967', organType: Organ.KIDNEY, bloodType: 'A', name: 'Type A Kidney', price: 195000, amount: '99g', procedureDate: '02/23', vendorAge: 34 },
    { id: 'KD746338', organType: Organ.KIDNEY, bloodType: 'A', name: 'Type A Kidney', price: 199000, amount: '58g', procedureDate: '03/15', vendorAge: 23 },
    { id: 'KD224355', organType: Organ.KIDNEY, bloodType: 'B', name: 'Type B Kidney', price: 200000, amount: '180g', procedureDate: '03/16', vendorAge: 19 },
    { id: 'KD448947', organType: Organ.KIDNEY, bloodType: 'B', name: 'Type B Kidney', price: 182000, amount: '138g', procedureDate: '03/22', vendorAge: 47 },
    { id: 'KD657677', organType: Organ.KIDNEY, bloodType: 'AB', name: 'Type AB Kidney', price: 195000, amount: '300g', procedureDate: '04/02', vendorAge: 48 },
    { id: 'KD473852', organType: Organ.KIDNEY, bloodType: 'AB', name: 'Type AB Kidney', price: 200000, amount: '250g', procedureDate: '04/08', vendorAge: 32 },
    { id: 'KD376935', organType: Organ.KIDNEY, bloodType: 'AB', name: 'Type AB Kidney', price: 170000, amount: '100g', procedureDate: '03/23', vendorAge: 54 },


    { id: 'LV247323', organType: Organ.LIVER, bloodType: 'O', name: 'Type O Liver', price: 152000, amount: '986g', procedureDate: '03/02', vendorAge: 19 },
    { id: 'LV364838', organType: Organ.LIVER, bloodType: 'A', name: 'Type A Liver', price: 125000, amount: '1677g', procedureDate: '04/01', vendorAge: 31 },
    { id: 'LV628489', organType: Organ.LIVER, bloodType: 'O', name: 'Type O Liver', price: 131000, amount: '1429g', procedureDate: '03/15', vendorAge: 28 },

    { id: 'BM479987', organType: Organ.MARROW, bloodType: 'A', name: 'HLA-A Bone Marrow', price: 25000, amount: '100ml', procedureDate: '03/10', vendorAge: 35, },
    { id: 'BM756446', organType: Organ.MARROW, bloodType: 'A', name: 'HLA-A Bone Marrow', price: 31000, amount: '100ml', procedureDate: '03/17', vendorAge: 28, },
    { id: 'BM953552', organType: Organ.MARROW, bloodType: 'A', name: 'HLA-A Bone Marrow', price: 25800, amount: '100ml', procedureDate: '04/01', vendorAge: 43, },
    { id: 'BM649445', organType: Organ.MARROW, bloodType: 'A', name: 'HLA-A Bone Marrow', price: 35000, amount: '100ml', procedureDate: '03/30', vendorAge: 37, },
    { id: 'BM588495', organType: Organ.MARROW, bloodType: 'B', name: 'HLA-A Bone Marrow', price: 42000, amount: '100ml', procedureDate: '03/31', vendorAge: 31, },
    { id: 'BM538827', organType: Organ.MARROW, bloodType: 'B', name: 'HLA-A Bone Marrow', price: 54000, amount: '100ml', procedureDate: '02/27', vendorAge: 21, },
    { id: 'BM724995', organType: Organ.MARROW, bloodType: 'B', name: 'HLA-A Bone Marrow', price: 30000, amount: '100ml', procedureDate: '03/04', vendorAge: 24, },
    { id: 'BM592493', organType: Organ.MARROW, bloodType: 'B', name: 'HLA-A Bone Marrow', price: 25000, amount: '100ml', procedureDate: '03/15', vendorAge: 34, },
    { id: 'BM855386', organType: Organ.MARROW, bloodType: 'DR', name: 'HLA-A Bone Marrow', price: 18000, amount: '100ml', procedureDate: '03/26', vendorAge: 45, },
    { id: 'BM354945', organType: Organ.MARROW, bloodType: 'DR', name: 'HLA-A Bone Marrow', price: 24000, amount: '100ml', procedureDate: '04/02', vendorAge: 50, },
    { id: 'BM663992', organType: Organ.MARROW, bloodType: 'DR', name: 'HLA-A Bone Marrow', price: 45000, amount: '100ml', procedureDate: '03/18', vendorAge: 62, },
    { id: 'BM794559', organType: Organ.MARROW, bloodType: 'DR', name: 'HLA-A Bone Marrow', price: 37000, amount: '100ml', procedureDate: '03/22', vendorAge: 28, },

    { id: 'CN899577', organType: Organ.CORNEA, name: 'Cornea', price: 52000, amount: '0.48mm', procedureDate: '03/18', vendorAge: 34 },
    { id: 'CN587429', organType: Organ.CORNEA, name: 'Cornea', price: 45000, amount: '0.39mm', procedureDate: '04/27', vendorAge: 51 },
    { id: 'CN659948', organType: Organ.CORNEA, name: 'Cornea', price: 39000, amount: '0.54mm', procedureDate: '03/07', vendorAge: 49 },
    { id: 'CN836827', organType: Organ.CORNEA, name: 'Cornea', price: 42000, amount: '0.46mm', procedureDate: '03/23', vendorAge: 38 },
    { id: 'CN363384', organType: Organ.CORNEA, name: 'Cornea', price: 33000, amount: '0.52mm', procedureDate: '03/31', vendorAge: 44 },
    { id: 'CN598538', organType: Organ.CORNEA, name: 'Cornea', price: 47000, amount: '0.50mm', procedureDate: '03/14', vendorAge: 47 },
    { id: 'CN222676', organType: Organ.CORNEA, name: 'Cornea', price: 45000, amount: '0.49mm', procedureDate: '03/02', vendorAge: 45 },
    { id: 'CN437475', organType: Organ.CORNEA, name: 'Cornea', price: 38000, amount: '0.40mm', procedureDate: '03/16', vendorAge: 29 },
    { id: 'CN459859', organType: Organ.CORNEA, name: 'Cornea', price: 40000, amount: '0.53mm', procedureDate: '03/30', vendorAge: 38 },
]

const organCatalogue = new Map<number, OrganItem>(
    organCatalogueList.map((organItem, idx) => [idx, {...organItem, liked: false, inBag: false }])
)

export default organCatalogue
