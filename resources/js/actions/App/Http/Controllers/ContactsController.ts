import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContactsController::create
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/contactos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactsController::create
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactsController::create
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactsController::create
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContactsController::create
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContactsController::create
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContactsController::create
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
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
const ContactsController = { create }

export default ContactsController