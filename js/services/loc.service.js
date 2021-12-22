export const locService = {
    getLocs
}

const STORAGE_KEY = 'locsDB'
const locs = storageService.load(KEY) || {};

// const locs = [
//     { name: 'Greatplace', lat: 32.047104, lng: 34.832384 }, 
//     { name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
// ]

function getLocs() {
return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function _createLocation() {
    const { lat, lng } = pos
    const loc = {
        id: ,
        name,
        lat,
        lng,
        createdAt: Date.now(),
        weather:,
        updatedAt:
    }
    locs.push(loc)
    storageService.saveToStorage(STORAGE_KEY, locs)
}


