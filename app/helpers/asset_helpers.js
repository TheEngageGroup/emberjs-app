var hbs, safeImg;

hbs = require('express-hbs');

safeImg = function(path) {
    try {
        return img(path);
    } catch (error) {
        return "/img/missing.png";
    }
};

hbs.registerHelper('css', function(file, media) {
    return css(file);
});

hbs.registerHelper('js', function(file) {
    return js(file);
});

hbs.registerHelper('img', function(file, options) {
    var attributes, imgOptions, key, path, val;
    if (!file) {
        throw "You must pass a path to an image";
    }
    path = safeImg(file);
    imgOptions = options.hash;
    attributes = ((function() {
        var _results;
        _results = [];
        for (key in imgOptions) {
            val = imgOptions[key];
            _results.push("" + key + "=\"" + val + "\" ");
        }
        return _results;
    })()).join('');
    if (process.env.NODE_ENV !== 'production') {
        path += "?" + (new Date().getTime());
    }
    return "<img src=\"" + path + "\" " + attributes + "/>";
});

hbs.registerHelper('imgPath', function(file) {
    var path;
    path = safeImg(file);
    if (process.env.NODE_ENV !== 'production') {
        path += "?" + (new Date().getTime());
    }
    return path;
});
