import Locals from '../../../providers/Locals';
import { fetchData } from './Common'

const BASE_URL_A = Locals.config().amBaseUrl;
class User {
    public static async users(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/users/v1', req, res, next);
    }
    public static async getUser(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/userDetails/v1', req, res, next);
    }
    public static async addUser(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/addUser/v1', req, res, next);
    }
    public static async updateUser(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/updateUser/v1', req, res, next);
    }
    public static async deleteUser(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/deleteUser/v1', req, res, next);
    }
}

export default User;
