const ServiceProvider = require('@ostro/support/serviceProvider');
const CookieJar = require('./jar');

/**
 * Service provider binding the cookie jar singleton into the application container.
 */
class CookieServiceProvider extends ServiceProvider {
    /**
     * Register cookie services into the container.
     */
    register(): void {
        this.$app.singleton('cookie', function ($app: any) {
            let $config = $app.instance('config').get('session');
            return new CookieJar($app, $config);
        });
    }

    /**
     * Boot cookie services.
     */
    boot(): void {

    }
}

module.exports = CookieServiceProvider;
