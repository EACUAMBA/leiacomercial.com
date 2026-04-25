import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ShoppingCartController::create
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/carinho-de-compras',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShoppingCartController::create
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShoppingCartController::create
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShoppingCartController::create
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShoppingCartController::create
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShoppingCartController::create
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShoppingCartController::create
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
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
const ShoppingCartController = { create }

export default ShoppingCartController