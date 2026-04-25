import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backoffice/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:13
 * @route '/backoffice/login'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::store
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:18
 * @route '/backoffice/login'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backoffice/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::store
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:18
 * @route '/backoffice/login'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::store
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:18
 * @route '/backoffice/login'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::store
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:18
 * @route '/backoffice/login'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BackOffice\LoginBackOfficeController::store
 * @see app/Http/Controllers/BackOffice/LoginBackOfficeController.php:18
 * @route '/backoffice/login'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const LoginBackOfficeController = { create, store }

export default LoginBackOfficeController