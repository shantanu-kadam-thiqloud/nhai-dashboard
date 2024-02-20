import Locals from '../../../providers/Locals';
import { fetchData, fetchPutData } from './Common'

const BASE_URL_A = Locals.config().amBaseUrl;
class UserChecker {
    public static async userRequests(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/userRequests/v1', req, res, next);
    }
    public static async userAddDeleteDetails(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/requestDetails/v1', req, res, next);
    }
    public static async userUpdateDetails(req: any, res: any, next: any): Promise<any> {
        fetchPutData(BASE_URL_A + '/usermanagement/checker/requestDetails/v1', req, res, next);
    }
    public static async userApproval(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/user/action/v1', req, res, next);
    }

}

export default UserChecker;
