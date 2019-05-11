export function setStorage (key, value) {
    try {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn(e);
    }
}

export function getStorage (key) {
    let result;
    try {
        result = localStorage.getItem(key);
        try {
            result = JSON.parse(result);
        } catch (e) {
            // result = result catch 里头可以不用写东西，但是里头必须有e。看似没执行try，实际上执行了，只不过抛出异常了
        }
    } catch (e) {
        console.warn(e);
    }

    return result;
}

export function getMaxVisitedNavigation (navigationVisitData) {
    navigationVisitData = navigationVisitData || getStorage('navigationVisitData') || {};
    let maxKey = 1;
    let maxValue = 0;
    for (let key in navigationVisitData) {
        const value = navigationVisitData[key] || 0;
        if (value > maxValue) {
            maxKey = key;
            maxValue = value;
        }
    }
    return {
        maxKey,
        maxValue,
    }
}

export default {
    name: 'utils'
}