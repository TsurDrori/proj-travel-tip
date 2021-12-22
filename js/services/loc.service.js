export const locService = {
    getLocs
}

const STORAGE_KEY = 'locsDB'
// const locs = storageService.load(KEY) || {};

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

function _createLocation(name) {
    const { lat, lng } = pos
    const loc = {
        id:12,
        name,
        lat,
        lng,
        createdAt: Date.now(),
        weather: weather,
        updatedAt: 0 
    }
    locs.push(loc)
    // saveToStorage(STORAGE_KEY, locs)
}


