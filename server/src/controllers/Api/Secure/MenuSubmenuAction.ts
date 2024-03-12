import Locals from '../../../providers/Locals';
import { fetchData, fetchPutData } from './Common'

const BASE_URL_A = Locals.config().sBaseUrl;
class MenuSubmenuAction {
    public static async addMenuSubmenuAction(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/submenu/action/v1', req, res, next);
    }
    public static async updateMenuSubmenuAction(req: any, res: any, next: any): Promise<any> {
        fetchPutData(BASE_URL_A + '/usermanagement/submenu/action/v1', req, res, next);
    }
    public static async deleteMenuSubmenuAction(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/submenu/action/v1', req, res, next);
    }
    public static async getMenuSubmenuActionRequests(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/submenu/detail/v1', req, res, next);
    }
    public static async getMenuSubmenuActionAddDeleteDetails(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/menumgmt/detail/v1', req, res, next);
    }
    public static async getMenuSubmenuActionUpdateDetails(req: any, res: any, next: any): Promise<any> {
        fetchPutData(BASE_URL_A + '/usermanagement/submenu/detail/v1', req, res, next);
    }
    public static async menuSubmenuActionApproval(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/submenu/approval/v1', req, res, next);
    }
    public static async getMenuSubmenuActionJson(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/submenu/finalget/v1', req, res, next);
    }
    public static async UpdateMenuSubmenuActionJson(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/submenu/finalpost/v1', req, res, next);
    }

}

export default MenuSubmenuAction;
