import Locals from '../../../providers/Locals';
import { downloadData, fetchData, fetchPutData } from './Common'

const BASE_URL_A = Locals.config().sBaseUrl;
class TransactionFile {

    public static async uploadAcccountSummaryFile(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/processAccountSummaryFile', req, res, next);
    }
    public static async uploadSanctionLimitFile(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/processSanctionLimitFile', req, res, next);
    }
    public static async processMain(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + ' /fetchMainTransactionData', req, res, next);
    }
    public static async processCalapd(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/fetchCalapdTransactionData', req, res, next);
    }
    public static async getMainTransaction(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/main-transaction-view/v1', req, res, next);
    }
    public static async getCALAPDTransaction(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/calapd-transaction-view/v1', req, res, next);
    }
    public static async updateMainTransaction(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/main-transaction-update/v1', req, res, next);
    }
    public static async updateCALAPDTransaction(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/calapd-transaction-update/v1', req, res, next);
    }
    public static async downloadMainTransaction(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/main-transaction-view/v1', req, res, next);
    }
    public static async downloadCALAPDTransaction(req: any, res: any, next: any): Promise<any> {
        downloadData(BASE_URL_A + '/dashboard/download/calapd-transaction-view/v1', req, res, next);
    }

}

export default TransactionFile;
