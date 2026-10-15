class CookieParser {
    $cookie: any;
    $registered: any;
    $cookieParser: any;

    constructor() {
        this.$cookie = (this as any).$app['cookie'];
        if (this.$cookie instanceof require('../jar')) {
            this.$registered = true;
            this.$cookieParser = this.$cookie.parse();
        }
    }

    handle({ request, response, next }: { request: any; response: any; next: (err?: any) => void }) {
        if (!this.$registered) {
            return next();
        }
        this.$cookieParser(request, response, next);
    }
}

module.exports = CookieParser;
