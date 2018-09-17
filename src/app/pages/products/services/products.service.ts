import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ProductModel} from '../models/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) {

    }

    getProducts(categoryHierarchy: string, region: string, page: number, isPager: boolean = true): Observable<ProductModel[]> {
        const groupbylimit = 15;

        const limit = isPager ? 30 : 300;

        const shortcode = `[cloudsearch company="RoomsToGo" category="${ categoryHierarchy }" ` +
            `exclusions="sku: 10136605||10183907||10183983" fields="${region.toLowerCase()}_av: 1" sort="price asc" groupby="collection" limit="${limit}" page="${page}" ]`;

        const payload = {
            type: 'shortcode', shortcode: shortcode
        };

        const productUrl = `https://shortcodes.furnitureapis.com/?payload=${JSON.stringify(payload)}`;

        return this.http.get(encodeURI(productUrl)).map((response: any) => {
            if (response.response.total > 0) {
                let results = response.response.results;
                if (!isPager && response.response.results.length > groupbylimit) {
                    results = response.response.results.slice(0, groupbylimit);
                }
                return results;
            }
            return Observable.of(new Array<ProductModel>());
        });
    }
}
