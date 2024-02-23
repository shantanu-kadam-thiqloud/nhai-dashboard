
import Locals from '../../../providers/Locals';
import { downloadData } from './Common'

const BASE_URL_A = Locals.config().aBaseUrl;
class DashboardDownload {
    public static async subsaideryAccountDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/snapshort/v1', req, res, next);
    }
    public static async limitLedgerDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/limit-ledger/v1', req, res, next);
    }
    public static async accountLevelDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/acc-level/v1', req, res, next);
    }
    public static async piuDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/piu/v1', req, res, next);
    }
    public static async eventsDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/events/v1', req, res, next);
    }
    public static async transactionDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/transaction/v1', req, res, next);
    }
    public static async roDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/regional-office/v1', req, res, next);
    }
    public static async velocityDownload(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/velocity/v1', req, res, next);
    }

}

export default DashboardDownload;
