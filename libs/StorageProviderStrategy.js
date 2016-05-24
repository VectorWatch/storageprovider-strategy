var util = require('util');
var RealProvider = require('vectorwatch-storageprovider-memory');

var StorageType = Object.freeze({
        MYSQL: "mysql",
        MEMORY: "memory",
        FILESYSTEM: "filesystem"
});

if (process.env.STORAGE === StorageType.MYSQL) {
    RealProvider = require('vectorwatch-storageprovider-mysql');
} else if (process.env.STORAGE === StorageType.MEMORY) {
    RealProvider = require('vectorwatch-storageprovider-memory');
} else if (process.env.STORAGE === StorageType.FILESYSTEM) {
    RealProvider = require('vectorwatch-storageprovider-filesystem');
} else {
    RealProvider = require('vectorwatch-storageprovider-mysql');
}


function StorageProvider() {
    if (process.env.STORAGE == "filesystem") {
        RealProvider.call(this, process.env.STORAGE_DIR);
    } else {
        RealProvider.call(this)
    }
}


util.inherits(StorageProvider, RealProvider);


module.exports = StorageProvider;