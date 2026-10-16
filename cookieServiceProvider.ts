import ServiceProvider from '@ostro/support/serviceProvider';
import CookieJar from './jar';

/**
 * Service provider binding the cookie jar singleton into the application container.
 */
class CookieServiceProvider extends ServiceProvider {
    declare $app: any;

    /**
     * Register cookie services into the container.
     */
    register(): void {
        this.$app.singleton('cookie', function ($app: any): CookieJar {
            const $config: Record<string, any> = $app.instance('config').get('session');
            return new CookieJar($app, $config);
        });
    }

    /**
     * Boot cookie services.
     */
    boot(): void {

    }
}

export default CookieServiceProvider;
