import Locals from '../../../providers/Locals';
import { fetchData } from './Common'

const BASE_URL_A = Locals.config().amBaseUrl;
class Profile {
    public static async profiles(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/profiles/v1', req, res, next);
    }
    public static async getProfile(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/profileDetails/v1', req, res, next);
    }
    public static async addProfile(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/addProfile/v1', req, res, next);
    }
    public static async updateProfile(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/updateProfile/v1', req, res, next);
    }
    public static async deleteProfile(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/admin/deleteProfile/v1', req, res, next);
    }
}

export default Profile;
