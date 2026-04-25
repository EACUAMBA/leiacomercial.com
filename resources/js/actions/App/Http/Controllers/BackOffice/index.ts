import LoginBackOfficeController from './LoginBackOfficeController'
import LogoutBackOfficeController from './LogoutBackOfficeController'
import BackOfficeController from './BackOfficeController'
const BackOffice = {
    LoginBackOfficeController: Object.assign(LoginBackOfficeController, LoginBackOfficeController),
LogoutBackOfficeController: Object.assign(LogoutBackOfficeController, LogoutBackOfficeController),
BackOfficeController: Object.assign(BackOfficeController, BackOfficeController),
}

export default BackOffice