import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\WelcomeController::welcome
 * @see app/Http/Controllers/WelcomeController.php:12
 * @route '/'
 */
export const welcome = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: welcome.url(options),
    method: 'get',
})

welcome.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WelcomeController::welcome
 * @see app/Http/Controllers/WelcomeController.php:12
 * @route '/'
 */
welcome.url = (options?: RouteQueryOptions) => {
    return welcome.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WelcomeController::welcome
 * @see app/Http/Controllers/WelcomeController.php:12
 * @route '/'
 */
welcome.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: welcome.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WelcomeController::welcome
 * @see app/Http/Controllers/WelcomeController.php:12
 * @route '/'
 */
welcome.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: welcome.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WelcomeController::welcome
 * @see app/Http/Controllers/WelcomeController.php:12
 * @route '/'
 */
    const welcomeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: welcome.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WelcomeController::welcome
 * @see app/Http/Controllers/WelcomeController.php:12
 * @route '/'
 */
        welcomeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: welcome.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WelcomeController::welcome
 * @see app/Http/Controllers/WelcomeController.php:12
 * @route '/'
 */
        welcomeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: welcome.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    welcome.form = welcomeForm
/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:12
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:12
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:12
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:12
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:12
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:12
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LoginController::login
 * @see app/Http/Controllers/LoginController.php:12
 * @route '/login'
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
* @see \App\Http\Controllers\ContactsController::contacts
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
export const contacts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})

contacts.definition = {
    methods: ["get","head"],
    url: '/contactos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactsController::contacts
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
contacts.url = (options?: RouteQueryOptions) => {
    return contacts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactsController::contacts
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
contacts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contacts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ContactsController::contacts
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
contacts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contacts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ContactsController::contacts
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
    const contactsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contacts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ContactsController::contacts
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
        contactsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contacts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ContactsController::contacts
 * @see app/Http/Controllers/ContactsController.php:12
 * @route '/contactos'
 */
        contactsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contacts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contacts.form = contactsForm
/**
* @see \App\Http\Controllers\FaqController::faq
 * @see app/Http/Controllers/FaqController.php:12
 * @route '/faq'
 */
export const faq = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faq.url(options),
    method: 'get',
})

faq.definition = {
    methods: ["get","head"],
    url: '/faq',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaqController::faq
 * @see app/Http/Controllers/FaqController.php:12
 * @route '/faq'
 */
faq.url = (options?: RouteQueryOptions) => {
    return faq.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::faq
 * @see app/Http/Controllers/FaqController.php:12
 * @route '/faq'
 */
faq.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faq.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaqController::faq
 * @see app/Http/Controllers/FaqController.php:12
 * @route '/faq'
 */
faq.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: faq.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FaqController::faq
 * @see app/Http/Controllers/FaqController.php:12
 * @route '/faq'
 */
    const faqForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: faq.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FaqController::faq
 * @see app/Http/Controllers/FaqController.php:12
 * @route '/faq'
 */
        faqForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faq.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FaqController::faq
 * @see app/Http/Controllers/FaqController.php:12
 * @route '/faq'
 */
        faqForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faq.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    faq.form = faqForm
/**
* @see \App\Http\Controllers\ShoppingCartController::shoppingCart
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
export const shoppingCart = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shoppingCart.url(options),
    method: 'get',
})

shoppingCart.definition = {
    methods: ["get","head"],
    url: '/carinho-de-compras',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ShoppingCartController::shoppingCart
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
shoppingCart.url = (options?: RouteQueryOptions) => {
    return shoppingCart.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ShoppingCartController::shoppingCart
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
shoppingCart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: shoppingCart.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ShoppingCartController::shoppingCart
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
shoppingCart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: shoppingCart.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ShoppingCartController::shoppingCart
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
    const shoppingCartForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: shoppingCart.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ShoppingCartController::shoppingCart
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
        shoppingCartForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: shoppingCart.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ShoppingCartController::shoppingCart
 * @see app/Http/Controllers/ShoppingCartController.php:12
 * @route '/carinho-de-compras'
 */
        shoppingCartForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: shoppingCart.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    shoppingCart.form = shoppingCartForm
/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::backoffice
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
export const backoffice = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backoffice.url(options),
    method: 'get',
})

backoffice.definition = {
    methods: ["get","head"],
    url: '/backoffice',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::backoffice
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
backoffice.url = (options?: RouteQueryOptions) => {
    return backoffice.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::backoffice
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
backoffice.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: backoffice.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::backoffice
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
backoffice.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: backoffice.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::backoffice
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
    const backofficeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: backoffice.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::backoffice
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
        backofficeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: backoffice.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BackOffice\BackOfficeController::backoffice
 * @see app/Http/Controllers/BackOffice/BackOfficeController.php:11
 * @route '/backoffice'
 */
        backofficeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: backoffice.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    backoffice.form = backofficeForm