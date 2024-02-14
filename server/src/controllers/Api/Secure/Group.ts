import Locals from '../../../providers/Locals';
import { fetchData } from './Common'

const BASE_URL_A = Locals.config().amBaseUrl;
class Group {
    public static async groups(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/groups/v1', req, res, next);
    }
    public static async getGroup(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/groupDetails/v1', req, res, next);
    }
    public static async addGroup(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/addGroup/v1', req, res, next);
    }
    public static async updateGroup(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/updateGroup/v1', req, res, next);
    }
    public static async deleteGroup(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/deleteUserGroup/v1', req, res, next);
    }
}

export default Group;
