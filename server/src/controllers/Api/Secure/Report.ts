import Locals from '../../../providers/Locals';
import { downloadData, fetchData } from './Common'

const BASE_URL_A = Locals.config().sBaseUrl;
class Report {
    public static async userLoginReport(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/report/userLogin/v1', req, res, next);
    }
    public static async userStatusReport(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/report/userStatus/v1', req, res, next);
    }
    public static async fifoAgeingReport(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/report/fifoAgeing/v1', req, res, next);
    }
    public static async userLoginReportDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/report/download/userLogin/v1', req, res, next);
    }
    public static async userStatusReportDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/report/download/userStatus/v1', req, res, next);
    }
    public static async fifoAgeingReportDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/report/fifoAgeing/download/v1', req, res, next);
    }
}

export default Report;
