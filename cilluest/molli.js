// Assume getViewConfigContinuousSize is defined somewhere
function getViewConfigContinuousSize(viewConfig, type) {
    // Function logic to compute or retrieve size based on viewConfig and type
    return viewConfig[type];
}

// Example function where your line of code might be used
function getSizeFromConfig(config, sizeType) {
    return getViewConfigContinuousSize(config.view, sizeType);
}

// Usage:
const config = {
    view: {
        width: 1024,
        height: 768
    }
};

const sizeType = 'width';
const sizeValue = getSizeFromConfig(config, sizeType);
console.log(sizeValue);  // Outputs: 1024
