let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator())
        .pipe(dest(`dev/html/`));
};
