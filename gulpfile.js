let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator())
        .pipe(dest(`dev/html/`));
};

let copyCSS = () => {
    return src(`css/*.css`)
        .pipe(dest(`dev/css/`));
};

let copyJS = () => {
    return src(`js/*.js`)
        .pipe(dest(`dev/js/`));
};

let lintCSS = () => {
        return src(`dev/css/*.css`)
            .pipe(cssLinter({
                failAfterError: true,
                reporters: [
                    {formatter: `verbose`, console: true}
                ]
            }))

    };

