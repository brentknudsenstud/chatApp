class Utils {
    static getNewId(prefix) {
        return prefix + Math.random().toString(36).substr(2, 10)
    }
}

