import {IResult} from './result'

export interface IScreeing {
    count: number;
    next: string;
    previous: string;
    results: IResult;
}