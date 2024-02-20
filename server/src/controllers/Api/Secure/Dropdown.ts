import Locals from '../../../providers/Locals';
import { fetchData } from './Common'

const BASE_URL_A = Locals.config().aBaseUrl;
class Dropdown {
    public static async branchDD(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/dropdowns/branch/v1', req, res, next);
    }
    public static async locationDD(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/dropdowns/location/v1', req, res, next);
    }
    public static async zoneDD(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/dropdowns/zone/v1', req, res, next);
    }
    public static async roDD(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dashboard/dropdowns/ro/v1', req, res, next);
    }
    public static async piuDD(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dropdowns/piu/v1', req, res, next);
    }
    public static async pdDD(req: any, res: any, next: any): Promise<any> {
        fetchData(BASE_URL_A + '/dropdowns/dropdowns/pd/v1', req, res, next);
    }
}

export default Dropdown;