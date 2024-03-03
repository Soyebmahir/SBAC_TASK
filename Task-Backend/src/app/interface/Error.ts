export type TErrorSources = {
    path: string | number,
    message: string
}[]

export type TGenericErrorResponse = {
    statusCode: number,
    message: string,
    errorMessage: string,
    errorDetails: object,
    stack?: string | null;


}