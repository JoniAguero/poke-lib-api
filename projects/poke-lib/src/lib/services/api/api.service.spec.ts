import { TestBed, getTestBed } from '@angular/core/testing';

import { PokemonApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { dummyPokemonListResponse, dummyPokemonResponse } from '../../../_test/mocks/pokemon-api-service';
import { URL_API } from '../../constants/endpoints/urls';

describe('PokemonApiService', () => {
    let injector: TestBed;
    let service: PokemonApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PokemonApiService],
        });

        injector = getTestBed();
        service = injector.get(PokemonApiService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('getAll() should return data', () => {
        service.getAll().subscribe((res) => {
            expect(res).toEqual(dummyPokemonListResponse);
        });

        const req = httpMock.expectOne(URL_API);
        expect(req.request.method).toBe('GET');
        req.flush(dummyPokemonListResponse);
    });

    it('getByName() should return data', () => {
        service.getByName('fake').subscribe((res) => {
            expect(res).toEqual(dummyPokemonListResponse);
        });

        const req = httpMock.expectOne(URL_API);
        expect(req.request.method).toBe('GET');
        req.flush(dummyPokemonListResponse);
    });

    it('getById() should return data', () => {
        service.getById('fake').subscribe((res) => {
            expect(res).toEqual(dummyPokemonResponse);
        });

        const req = httpMock.expectOne(URL_API);
        expect(req.request.method).toBe('GET');
        req.flush(dummyPokemonResponse);
    });
});
