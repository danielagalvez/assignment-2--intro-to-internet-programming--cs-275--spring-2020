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

let lintJS = () => {
            return src(`dev/js/*.js`)
                .pipe(jsLinter())
                .pipe(jsLinter.formatEach(`compact`, process.stderr))
        };

let compileCSSForDev = () => {
    return src(`css/*.css`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`dev/css/`));
};

let transpileJSForDev = () => {
        return src(`js/*.js`)
            .pipe(babel())
            .pipe(dest(`dev/js/`));
    };

let compressHTML = () => {
        return src(`dev/html/*.html`)
            .pipe(htmlCompressor({collapseWhitespace: true}))
            .pipe(dest(`prod/html/`))};

let copyCSSForProd = () => {
    return src(`dev/css/*.css`)
        .pipe(dest(`prod/css/`));
};

let copyJSForProd = () => {
    return src(`dev/js/*.js`)
        .pipe(dest(`prod/js/`));
};
let serve = () => {
    browserSync({

        server: {
            baseDir: [
                `./dev`,
                `./html`,
                `./css`,
                `./js`,
            ]
        }
    });

