type Params = string | number | null | boolean;
export declare class SqliteBruv<T = Record<string, Params>> {
    private db;
    _columns: string[];
    _conditions: string[];
    _tableName: string;
    _params: Params[];
    _limit?: number;
    _offset?: number;
    _orderBy?: {
        column: string;
        direction: "ASC" | "DESC";
    };
    _query: boolean;
    private _D1_api_key?;
    private _D1_url?;
    constructor({ db, D1, }?: {
        db?: any;
        D1?: {
            accountId: string;
            databaseId: string;
            apiKey: string;
        };
    });
    from<Model extends Record<string, Params> = Record<string, Params>>(tableName: string): SqliteBruv<Model>;
    select(...columns: string[]): this;
    where(condition: string, ...params: Params[]): this;
    andWhere(condition: string, ...params: Params[]): this;
    orWhere(condition: string, ...params: Params[]): this;
    limit(count: number): this;
    offset(count: number): this;
    orderBy(column: string, direction: "ASC" | "DESC"): this;
    get(): Promise<T[]>;
    getOne(): Promise<T>;
    insert(data: object): Promise<T>;
    update(data: object): Promise<T>;
    delete(): Promise<T>;
    private build;
    clear(): void;
    run(query: string, params: (string | number | null | boolean)[], { single, many }?: {
        single: boolean;
        many: boolean;
    }): Promise<any>;
}
export {};