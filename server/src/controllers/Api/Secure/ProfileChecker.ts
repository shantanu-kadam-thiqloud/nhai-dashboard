import Locals from '../../../providers/Locals';
import { fetchData, fetchPutData } from './Common'

const BASE_URL_A = Locals.config().amBaseUrl;
class ProfileChecker {
    public static async profileRequests(req: any, res: any, next: any): Promise<any> {
        fetchPutData(BASE_URL_A + '/usermanagement/checker/profile/v1', req, res, next);
    }
    public static async profileAddDeleteDetails(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/profile/v1', req, res, next);
    }
    public static async profileUpdateDetails(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/profileRequests/v1', req, res, next);
    }
    public static async profileApproval(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/profile/action/v1', req, res, next);
    }

}

export default ProfileChecker;
