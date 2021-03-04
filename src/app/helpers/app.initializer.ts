import { AccountService } from '../shared/services';

export function appInitializer(userService: AccountService) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        userService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}