import Locals from '../../../providers/Locals';
import { fetchData } from './Common'

const BASE_URL_A = Locals.config().amBaseUrl;
class GroupChecker {
    public static async groupRequests(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/groupRequests/v1', req, res, next);
    }
    public static async groupAddDeleteDetails(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/group/v1', req, res, next);
    }
    public static async groupUpdateDetails(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/group/v1', req, res, next);
    }
    public static async groupApproval(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/usermanagement/checker/group/action/v1', req, res, next);
    }

}

export default GroupChecker;
