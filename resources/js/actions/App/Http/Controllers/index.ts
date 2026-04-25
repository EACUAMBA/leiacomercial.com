import WelcomeController from './WelcomeController'
import ProductController from './ProductController'
import LoginController from './LoginController'
import ContactsController from './ContactsController'
import FaqController from './FaqController'
import ShoppingCartController from './ShoppingCartController'
import BackOffice from './BackOffice'
const Controllers = {
    WelcomeController: Object.assign(WelcomeController, WelcomeController),
ProductController: Object.assign(ProductController, ProductController),
LoginController: Object.assign(LoginController, LoginController),
ContactsController: Object.assign(ContactsController, ContactsController),
FaqController: Object.assign(FaqController, FaqController),
ShoppingCartController: Object.assign(ShoppingCartController, ShoppingCartController),
BackOffice: Object.assign(BackOffice, BackOffice),
}

export default Controllers