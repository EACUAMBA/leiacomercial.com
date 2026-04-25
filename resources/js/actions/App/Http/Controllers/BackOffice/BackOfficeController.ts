import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::create
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backoffice',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::create
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::create
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::create
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::create
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::create
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::create
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
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
const BackOfficeController = { create }

export default BackOfficeController