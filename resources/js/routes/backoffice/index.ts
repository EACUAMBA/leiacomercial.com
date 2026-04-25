import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::login
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/backoffice/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::login
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::login
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::login
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::login
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::login
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::login
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::logout
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/backoffice/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::logout
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::logout
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::logout
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::logout
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: logout.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::logout
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
        logoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logout.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::logout
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
        logoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logout.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    logout.form = logoutForm
/**
* @see \ProductBackOfficeController::products
 * @see [unknown]:0
 * @route '/backoffice/products'
 */
export const products = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(options),
    method: 'get',
})

products.definition = {
    methods: ["get","head"],
    url: '/backoffice/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProductBackOfficeController::products
 * @see [unknown]:0
 * @route '/backoffice/products'
 */
products.url = (options?: RouteQueryOptions) => {
    return products.definition.url + queryParams(options)
}

/**
* @see \ProductBackOfficeController::products
 * @see [unknown]:0
 * @route '/backoffice/products'
 */
products.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(options),
    method: 'get',
})
/**
* @see \ProductBackOfficeController::products
 * @see [unknown]:0
 * @route '/backoffice/products'
 */
products.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: products.url(options),
    method: 'head',
})

    /**
* @see \ProductBackOfficeController::products
 * @see [unknown]:0
 * @route '/backoffice/products'
 */
    const productsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: products.url(options),
        method: 'get',
    })

            /**
* @see \ProductBackOfficeController::products
 * @see [unknown]:0
 * @route '/backoffice/products'
 */
        productsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: products.url(options),
            method: 'get',
        })
            /**
* @see \ProductBackOfficeController::products
 * @see [unknown]:0
 * @route '/backoffice/products'
 */
        productsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: products.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    products.form = productsForm
const backoffice = {
    products: Object.assign(products, products),
}

export default backoffice