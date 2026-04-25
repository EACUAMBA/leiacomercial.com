import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backoffice/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BackOffice\LogoutBackOfficeController::create
 * @see app/Http/Controllers/BackOffice/LogoutBackOfficeController.php:12
 * @route '/backoffice/logout'
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
const LogoutBackOfficeController = { create }

export default LogoutBackOfficeController